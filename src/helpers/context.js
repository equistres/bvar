
import React, { useEffect, useReducer } from 'react';
import firebase from 'firebase/app';
import Database, { consumeDocuments } from './db';
import consoleLogHelper from './console';



export const Store = React.createContext();

export const getMembers = async () => {
    let response;

    if (localStorage.getItem("users") === null) {
        response = await Database("villanos")
        consoleLogHelper("red", "Dato obtenido de Firestore")
        return response;
    } else {
        response = JSON.parse(localStorage.getItem("users"))
        consoleLogHelper("green", "Dato obtenido de localStorage")
        return response;
    }
}

const isAdminCheck = async () => {
    let doc = await consumeDocuments("roles", "admin");
    if (doc.exists) {
        return doc.data().email;
    }
}

function reducer(state, action) {
    console.log("TCL: reducer -> state", state)
    console.log("TCL: reducer -> action", action)
    switch (action.type) {
        case 'ADDUSERS':
            return { ...state, users: action.payload };
        case 'ADDADMIN':
            return { ...state, admin: action.payload };
        case 'RELOADUSERS':
            return { ...state, users: getMembers() };
        default:
            return state;
    }
}



export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, null)

    useEffect(() => {
        getMembers().then(response => {
            dispatch({
                type: 'ADDUSERS',
                payload: response
            })
        })
        isAdminCheck().then(response => {
            firebase.auth().onAuthStateChanged(user => {
                if (user && user.email && user.email === response) {
                    dispatch({
                        type: 'ADDADMIN',
                        payload: true
                    })
                } else {
                    dispatch({
                        type: 'ADDADMIN',
                        payload: false
                    })
                }

            });
        })
    }, [])

    const value = { state, dispatch };
    if (value) {
        return <Store.Provider value={value}>{props.children}</Store.Provider>;
    }
}
