import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { TextField } from "@mui/material";
import type { AuthForm } from "../../@types/types";

export default function Auth() {
    const [authForm, setAuthForm] = useState<AuthForm>({ name: "", phone: "", email: "", password: "", picture: null });
    const [errors, setErrors] = useState({ name: "", phone: "", email: "", password: "", picture: "" });
    const [hidden, setHidden] = useState(true);
    const [status, setStatus] = useState("signIn");

    function submitHandler() {

    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAuthForm({ ...authForm, [e.target.name]: e.target.value });
    }

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setAuthForm({ ...authForm, picture: e.target.files[0] });
        }
    }

    return (
        <>
            <div className="auth-container">
                <img src={logo} alt="logo" />
                <h1>Me<span>rn</span> Sta<span>ck</span> Ch<span>at</span> A<span>pp</span></h1>
                <form onSubmit={submitHandler} autoComplete="off" >
                    <TextField name="name" value={authForm.name} onChange={handleChange} label="enter name..." />
                    <TextField name="phone" value={authForm.phone} onChange={handleChange} label="enter phone..." />
                    <TextField name="email" value={authForm.email} onChange={handleChange} label="enter email..." />
                    <TextField name="password" value={authForm.password} onChange={handleChange} label="enter password..." />
                    <input type="file" onChange={handleFile} />
                    <button type="submit" >{status === "signIn" ? "Sign in" : "Sign up"}</button>
                </form>
            </div>
        </>
    )
}