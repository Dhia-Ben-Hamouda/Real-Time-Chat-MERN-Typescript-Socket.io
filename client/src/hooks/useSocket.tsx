import React from "react";
import { SocketContext } from "../context/SocketContext";

export default function useSocket(){
    return React.useContext(SocketContext);
}