import React from "react";
import { Socket, io } from "socket.io-client";
import { ProviderProps } from "../@types/types";
import url from "../api/baseURL";

export const SocketContext = React.createContext({} as any);

export default function SocketProvider({ children }: ProviderProps) {
    const [socket, setSocket] = React.useState<Socket | null>(null);

    React.useEffect(() => {
        const newSocket = io(url);
        setSocket(newSocket);

        return () => { newSocket.close(); }
    }, []);

    return (
        <>
            <SocketContext.Provider value={socket} >{children}</SocketContext.Provider>
        </>
    )
}