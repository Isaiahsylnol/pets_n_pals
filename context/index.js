import { createContext, useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: null}
        case 'LOGIN':
             return state
    }
};

const initialState = {
    user: null
}

const Context = createContext({})

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Context.Provider value={value}>{children}</Context.Provider>
}
export { Context, Provider};