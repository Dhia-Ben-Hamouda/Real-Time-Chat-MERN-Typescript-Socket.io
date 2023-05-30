import { TextField } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

export default function ResetPassword(){
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    function submitHandler(){

    }

    return(
        <>
            <div className="auth-container">
            <img src={logo} alt="logo" />
                <h1>Me<span>rn</span> Sta<span>ck</span> Ch<span>at</span> A<span>pp</span></h1>
                <form onSubmit={submitHandler} autoComplete="off" >
                    <TextField value={password} onChange={e => setPassword(e.target.value)} label="enter new password..." />
                    <TextField value={confirm} onChange={e => setConfirm(e.target.value)} label="confirm password..." />
                    <button>reset password</button>
                </form>
            </div>
        </>
    )
}