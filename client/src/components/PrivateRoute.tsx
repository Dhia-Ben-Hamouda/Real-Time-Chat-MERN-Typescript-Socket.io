import React from "react";
import useAuth from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
    const { user, accessToken } = useAuth();

    return (
        <>
            {
                user ? <Outlet /> : <Navigate to="/" />
            }
        </>
    )
}