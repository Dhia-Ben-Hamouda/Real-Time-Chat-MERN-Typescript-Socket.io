import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface MyRequest extends Request {
    user?: any
}

export default function authMiddleware(req: MyRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ msg: "json web token is required to use this route" });

    try {
        const token = authHeader.split(" ")[1];
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);

        req.user = user;

        next();
    } catch (err) {
        return res.status(403).json({ msg: "invalid token" });
    }
}