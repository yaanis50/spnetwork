import React from 'react';
import jwtDecode from 'jwt-decode';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

let user = null;
const token = localStorage.getItem("SPNetwork");


if(token !== 'undefined' && token !== undefined && token !== null){

    const decodedToken = jwtDecode(token);
    const expiresAt = new Date(decodedToken.exp * 1000);

    if(new Date() > expiresAt){
        localStorage.removeItem('SPNetwork');
    } else {
        user = decodedToken;
    }
} else {
    console.error('token not found');
}

const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN' :
            localStorage.setItem('SPNetwork',action.payload);
            const decodedToken = jwtDecode(action.payload);
            return {
                ...state,
                user: decodedToken,
            }
        case 'LOGOUT' :
            localStorage.removeItem('SPNetwork');
            return {
                ...state,
                user: null,
            }
        default:
            throw new Error(`Unkonwn action type: ${action.type}`);
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(authReducer, { user });

    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                {children}
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    );
}

export const useAuthState = () => React.useContext(AuthStateContext);
export const useAuthDispatch = () => React.useContext(AuthDispatchContext);