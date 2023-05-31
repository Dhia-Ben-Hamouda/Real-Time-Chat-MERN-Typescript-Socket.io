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
                <div className="title">
                    <img className="logo" src={logo} alt="" />
                    <h1>Me<span>rn</span> Sta<span>ck</span> Ch<span>at</span> A<span>pp</span></h1>
                </div>
                <div className="container">
                    <div className="search-container">
                        <button>
                            <FaSearch className="search-icon" />
                        </button>
                        <input placeholder="Search for users..." />
                    </div>
                    <div className="avatar-container">
                        <img className="avatar" src={`${url}/images/${user.picture}`} alt="avatar" /> 
                    </div>
                </div>
            </nav>
        </>
    )
}