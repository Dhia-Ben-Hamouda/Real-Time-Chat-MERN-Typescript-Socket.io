import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const buttonRef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        if (buttonRef.current) {

        }
    }

    return (
        <>
            <div className="auth-container">
                <img src={logo} alt="logo" />
                <h1>Me<span>rn</span> Sta<span>ck</span> Ch<span>at</span> A<span>pp</span></h1>
                <form autoComplete="off" onSubmit={submitHandler} >
                    <TextField value={email} onChange={e => setEmail(e.target.value)} label="enter email..." />
                    <button type="submit" ref={buttonRef} >Send password reset link</button>
                </form>
            </div>
        </>
    )
}