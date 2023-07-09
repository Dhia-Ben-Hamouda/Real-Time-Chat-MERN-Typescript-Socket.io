import React from "react";
import logo from "../assets/images/logo.png";
import url from "../api/baseURL";
import useAuth from "../hooks/useAuth";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    const { user, token } = useAuth();

    return (
        <>
            <nav className="shadow" >
                <div className="container">
                    <div className="website-container">
                        <img src={logo} alt="logo-picture" />
                        <div className="search-container shadow">
                            <FaSearch className="icon" />
                            <input placeholder="Type here to search..." />
                        </div>
                    </div>
                    <div className="profile-container">

                        <div className="avatar-wrapper">
                            <img src={`${url}/images/profile.png`} alt="user-picture" />
                            <div className="dropdown">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="placeholder">

                </div>
            </nav>
        </>
    )
}