import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import illustration from "../assets/images/illustration.png";
import useAuth from "../hooks/useAuth";
import { Toaster } from "react-hot-toast";

export default function AuthPage() {
    const { user, token } = useAuth();

    if (user) {
        return <Navigate to="/home" />
    } else {
        return (
            <>
                <section id="authPage">
                    <div className="illustration-container">
                        <img src={illustration} alt="illustration" />
                    </div>
                    <Outlet />
                </section>
                <Toaster />
            </>
        )
    }
}