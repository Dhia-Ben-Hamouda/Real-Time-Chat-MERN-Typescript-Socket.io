import React from "react";
import url from "../api/baseURL";

export default function Conversation() {
    return (
        <>
            <div className="conversation">
                <img src={`${url}/images/profile.png`} />
                <div className="wrapper">
                    <div className="information">
                        <h4 className="user-name">Dhia Ben Hamouda</h4>
                        <p>5 hours ago</p>
                    </div>
                    <p className="message" >ija 5ali nkamlo na5dmo rapport</p>
                </div>
            </div>
        </>
    )
}