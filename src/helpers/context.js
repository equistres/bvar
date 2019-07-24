
import React, { useEffect, useReducer } from 'react';

import Database from '../helpers/db';
import consoleLogHelper from '../helpers/console';


function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, users: action.payload };
        default:
            return state;
    }
}

export const Store = React.createContext();

const getMembers = async () => {
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


export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, null)

    useEffect(() => {
        getMembers().then(response => {
            dispatch({
                type: 'ADD',
                payload: response
            })
        })
    }, [])

    const value = { state, dispatch };
    if (value) {
        return <Store.Provider value={value}>{props.children}</Store.Provider>;
    }
}
