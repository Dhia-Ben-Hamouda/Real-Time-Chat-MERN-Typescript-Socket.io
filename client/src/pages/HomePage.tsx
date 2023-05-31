import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import url from "../api/baseURL";
import Conversation from "../components/Conversation";
import { TextField } from "@mui/material";

export default function HomePage() {
    const { user, token } = useAuth();
    const [message, setMessage] = useState("");

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
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </div>
                <div className="messages-container">
                    <div className="chat-box">

                    </div>
                    <form autoComplete="off" >
                        <input value={message} onChange={(e: any) => { setMessage(e.target.value) }} placeholder="enter message..." className="field" />
                        <button>Send message</button>
                    </form>
                </div>
            </section>
            <Toaster />
        </>
    )
}