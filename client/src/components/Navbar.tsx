import React from "react";
import logo from "../assets/images/logo.png";
import url from "../api/baseURL";
import useAuth from "../hooks/useAuth";
import { FaSearch } from "react-icons/fa";

export default function Navbar(){
    const { user , token } = useAuth();

    return(
        <>
            <nav>

            </nav>
        </>
    )
}