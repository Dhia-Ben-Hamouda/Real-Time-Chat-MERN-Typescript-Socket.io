import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import authRoutes from "./routes/authRoutes";

const app = express();
const server = http.createServer(app);

// middleware

dotenv.config();
app.use(express.static("uploads"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"*",
    credentials:true
}));

// env variables

const port = process.env.PORT || 5000;
const url = process.env.URL as string;

// connecting to mongoDB

mongoose.connect(url)
.then(() => { console.log("connected to mongoDB !") })
.catch((err) => { console.error(err) });

// launching the app

server.listen(port , () => {
    console.log(`listening to requests on port ${port}`);
})

// handle routes

app.use("/auth" , authRoutes);

// handle web sockets

const io = new Server(server , {
    cors:{
        origin:"*"
    },
    pingTimeout:60000
})

io.on("connection" , (socket) => {
    
})