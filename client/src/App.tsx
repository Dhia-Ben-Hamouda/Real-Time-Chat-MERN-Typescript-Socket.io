import React from "react";
import { Routes , Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Auth from "./components/auth/Auth";
import ForgetPassword from "./components/auth/ForgetPassword";
import ResetPassword from "./components/auth/ResetPassword";
import HomePage from "./pages/HomePage";
import AuthProvider from "./context/AuthContext";
import SocketProvider from "./context/SocketContext";

export default function App(){
    return(
        <>
            <AuthProvider>
                <SocketProvider>
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/auth" />} />
                        <Route path="/auth" element={<AuthPage/>} >
                            <Route path="" element={<Auth/>} />
                            <Route path="forgetPassword" element={<ForgetPassword/>} />
                            <Route path="resetPassword" element={<ResetPassword/>} />
                        </Route>
                        <Route path="/home" element={<HomePage/>} />
                    </Routes>
                </SocketProvider>
            </AuthProvider>
        </>
    )
}