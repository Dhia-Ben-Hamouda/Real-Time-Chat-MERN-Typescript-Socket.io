import React from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
    return (
        <>
            <Navbar />

            <Toaster />
        </>
    )
}