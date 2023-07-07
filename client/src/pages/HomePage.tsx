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
                
            </section>
            <Toaster />
        </>
    )
}