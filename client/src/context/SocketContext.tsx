import React from "react";
import { Socket, io } from "socket.io-client";
import { ProviderProps } from "../@types/types";

export const SocketContext = React.createContext({} as any);

export default function SocketProvider({ children }: ProviderProps) {
    const [socket, setSocket] = React.useState<Socket | null>(null);

    React.useEffect(() => {
        const newSocket = io();
    }, []);

    return (
        <>
            <SocketContext.Provider value={socket} >{children}</SocketContext.Provider>
        </>
    )
}