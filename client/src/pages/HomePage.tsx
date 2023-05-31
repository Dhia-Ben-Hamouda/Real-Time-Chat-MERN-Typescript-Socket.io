import React from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import url from "../api/baseURL";

export default function HomePage() {
    const { user, token } = useAuth();

    return (
        <>
            <Navbar />
            <section id="chat-container">
                <div className="conversations-container">
                    <div className="header">
                        <h2>My Chats</h2>
                        <button>Create Group Chat</button>
                    </div>
                    <div className="conversations">
                        <div className="conversation">
                            <img src={`${url}/images/profile.png`} />
                            <div className="wrapper">
                                <div className="information">
                                    <div className="user-name">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="messages-container">

                </div>
            </section>
            <Toaster />
        </>
    )
}