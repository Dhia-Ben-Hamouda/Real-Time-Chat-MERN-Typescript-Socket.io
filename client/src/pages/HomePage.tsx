import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import url from "../api/baseURL";
import present from "../assets/images/present.png";
import { MdRefresh } from "react-icons/md";

export default function HomePage() {
    const { user, token } = useAuth();

    return (
        <>
            <Navbar />
            <section id="home-page">
                <div className="home-container">
                    <div className="left">
                        <div className="birthday-container shadow">
                            <img src={present} alt="present-picture" />
                            <p>Dhia Ben Hamouda and 2 others have their birthday today</p>
                        </div>
                        <div className="people-you-may-know-container shadow">
                            <div className="wrapper">
                                <p>People you may know</p>
                                <MdRefresh className="icon" />
                            </div>
                            <div className="people">
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>
                                <div className="person">
                                    <img src={`${url}/images/profile.png`} alt="user-picture" />
                                    <p>Dhia Ben Hamouda</p>
                                    <button>follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle">

                    </div>
                    <div className="right">

                    </div>
                </div>
                <div className="chat-container">

                </div>
            </section>
            <Toaster />
        </>
    )
}