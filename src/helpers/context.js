
import React from 'react';



const initialValue = {
    users: null
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, users: action.payload };
        default:
            return state;
    }
}

export const Store = React.createContext();
export const StoreProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialValue);

    const value = { state, dispatch };

    return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
