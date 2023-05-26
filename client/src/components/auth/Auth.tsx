import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { TextField } from "@mui/material";
import type { AuthForm } from "../../@types/types";
import { Link } from "react-router-dom";
import google from "../../assets/images/socials/google.png";
import facebook from "../../assets/images/socials/facebook.png";
import twitter from "../../assets/images/socials/twitter.png";

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
                    {
                        status !== "signIn" && <>
                            <TextField name="name" value={authForm.name} onChange={handleChange} label="enter name..." />
                            <TextField name="phone" value={authForm.phone} onChange={handleChange} label="enter phone..." />
                        </>
                    }
                    <TextField name="email" value={authForm.email} onChange={handleChange} label="enter email..." />
                    <TextField name="password" value={authForm.password} onChange={handleChange} label="enter password..." />
                    {
                        status === "signIn" ? <Link to="/" >forget password ?</Link> : <input type="file" onChange={handleFile} />
                    }
                    <button type="submit" >{status === "signIn" ? "Sign in" : "Sign up"}</button>
                    {
                        status === "signIn" ? <>
                            <h3>Dont't have an account ? <span>Sign up</span> </h3>
                            <h3 className="or" >or sign in with</h3>
                            <div className="socials">
                                <img src={google} alt="google logo" />
                                <img src={facebook} alt="facebook logo" />
                                <img src={twitter} alt="twitter logo" />    
                            </div>
                        </> : <h3>Already have an account ? <span>Sign in</span> </h3>
                    }
                </form>
            </div>
        </>
    )
}