import React from "react";
import { Outlet } from "react-router-dom";
import illustration from "../assets/images/illustration.png";

export default function AuthPage(){
    return(
        <>
            <section id="authPage">
                <div className="illustration-container">
                    <img src={illustration} alt="illustration" />
                </div>
                <Outlet />
            </section>
        </>
    )
}