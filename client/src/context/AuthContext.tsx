import React from "react";
import { Action, AuthState, ProviderProps } from "../@types/types";

export const AuthContext = React.createContext({} as any);

const initalState = {
    accessToken: localStorage.getItem("access-token") as string,
    user: JSON.parse(localStorage.getItem("user") as string)
}

function authReducer(state: AuthState = initalState, action: Action) {
    switch (action.type) {
        case "SIGN_IN":
            localStorage.setItem("accessToken", action.payload.accessToken);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            return { accessToken: action.payload.accessToken, user: action.payload.user }
        case "SIGN_OUT":
            localStorage.clear();
            return { accessToken: null, user: null }
        default:
            return state;
    }
}

export default function AuthProvider({ children }: ProviderProps) {
    const [state, dispatch] = React.useReducer(authReducer, initalState);

    return (
        <>
            <AuthContext.Provider value={{ ...state, dispatch }} >{children}</AuthContext.Provider>
        </>
    )
}