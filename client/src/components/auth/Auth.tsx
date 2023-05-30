import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import { TextField , InputAdornment } from "@mui/material";
import type { AuthForm } from "../../@types/types";
import { Link , useNavigate } from "react-router-dom";
import google from "../../assets/images/socials/google.png";
import facebook from "../../assets/images/socials/facebook.png";
import twitter from "../../assets/images/socials/twitter.png";
import emptyObject from "../../utils/emptyObject";
import validateForm from "../../utils/validateForm";
import { signIn , signUp  } from "../../utils/auth";
import { FaEye , FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

export default function Auth() {
    const [authForm, setAuthForm] = useState<AuthForm>({ name: "", phone: "", email: "", password: "", picture: null });
    const [errors, setErrors] = useState({ name: "", phone: "", email: "", password: "" });
    const [hidden, setHidden] = useState(true);
    const [status, setStatus] = useState("signIn");
    const buttonRef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();
    const { dispatch } = useAuth();

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();

        if (!emptyObject(validateForm(authForm, status))) {
            setErrors(validateForm(authForm, status));
            return;
        }

        if (buttonRef.current) {
            if (status === "signIn") {
                signIn(authForm, buttonRef.current, navigate, dispatch);
            } else {
                signUp(authForm, buttonRef.current);
            }
        }
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
                            <TextField error={!!errors.name} helperText={errors.name} name="name" value={authForm.name} onChange={handleChange} label="enter name..." />
                            <TextField error={!!errors.phone} helperText={errors.phone} name="phone" value={authForm.phone} onChange={handleChange} label="enter phone..." />
                        </>
                    }
                    <TextField error={!!errors.email} helperText={errors.email} name="email" value={authForm.email} onChange={handleChange} label="enter email..." />
                    <TextField error={!!errors.password} helperText={errors.password} type={hidden ? "password" : "text" } InputProps={{
                        endAdornment: <InputAdornment position="end" >
                            {
                                hidden ? <FaEye size="1.5rem" color="#555" style={{ cursor:"pointer" }} onClick={() => { setHidden(!hidden) }} /> : <FaEyeSlash size="1.5rem" color="#555" style={{ cursor:"pointer" }} onClick={() => { setHidden(!hidden) }} /> 
                            }
                        </InputAdornment>
                    }} name="password" value={authForm.password} onChange={handleChange} label="enter password..." />
                    {
                        status === "signIn" ? <Link to="forgetPassword" >forget password ?</Link> : <div className="profile-picture" >
                            <input type="file" onChange={handleFile} />
                        </div>
                    }
                    <button ref={buttonRef} type="submit" >{status === "signIn" ? "Sign in" : "Sign up"}</button>
                    {
                        status === "signIn" ? <>
                            <h3 onClick={() => setStatus("signUp")} >Don't have an account ? <span>Sign up</span> </h3>
                            <h3 className="or" >or sign in with</h3>
                            <div className="socials">
                                <img src={google} alt="google logo" />
                                <img src={facebook} alt="facebook logo" />
                                <img src={twitter} alt="twitter logo" />
                            </div>
                        </> : <h3 onClick={() => setStatus("signIn")} >Already have an account ? <span>Sign in</span> </h3>
                    }
                </form>
            </div>
        </>
    )
}