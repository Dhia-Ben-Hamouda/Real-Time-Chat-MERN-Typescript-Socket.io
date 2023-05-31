import { TextField, InputAdornment } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import { resetPassword } from "../../utils/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate, useSearchParams } from "react-router-dom";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [hidden, setHidden] = useState(true);
    const [error, setError] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const buttonRef = useRef<HTMLButtonElement>(null);

    function submitHandler() {
        if (buttonRef.current) {
            if (confirm !== password) {
                setError("confirmation should match new password");
                return;
            }
            resetPassword(password, buttonRef.current);
        }
    }

    if (!searchParams.get("id")) return <Navigate to="/auth" />

    return (
        <>
            <div className="auth-container">
                <img src={logo} alt="logo" />
                <h1>Me<span>rn</span> Sta<span>ck</span> Ch<span>at</span> A<span>pp</span></h1>
                <form onSubmit={submitHandler} autoComplete="off" >
                    <TextField type={hidden ? "password" : "text"} InputProps={{
                        endAdornment: <InputAdornment position="end" >
                            {
                                hidden ? <FaEye size="1.5rem" color="#555" style={{ cursor: "pointer" }} onClick={() => { setHidden(!hidden) }} /> : <FaEye size="1.5rem" color="#555" style={{ cursor: "pointer" }} onClick={() => { setHidden(!hidden) }} />
                            }
                        </InputAdornment>
                    }} value={password} onChange={(e: any) => setPassword(e.target.value)} label="enter new password..." />
                    <TextField error={!!error} helperText={error} value={confirm} onChange={(e: any) => setConfirm(e.target.value)} label="confirm password..." />
                    <button ref={buttonRef} >reset password</button>
                </form>
            </div>
        </>
    )
}