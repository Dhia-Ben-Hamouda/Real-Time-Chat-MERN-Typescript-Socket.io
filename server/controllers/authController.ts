import { Request, Response } from "express";
import User from "../models/User";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sharp from "sharp";

export async function signIn(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const exist = await User.findOne({ email });

        if (!exist) return res.status(404).json({ msg: "user with the given email doesn't exist" });

        const match = await bcrypt.compare(password, exist.password);

        if (!match) return res.status(400).json({ msg: "wrong password" });

        const accessToken = generateAccessToken({ email, password, picture: exist.picture, phone: exist.phone, name: exist.name });
        const refreshToken = generateRefreshToken({ email, password, picture: exist.picture, phone: exist.phone, name: exist.name });

        return res.status(200).cookie("refreshToken", refreshToken, { httpOnly: true }).json({ msg: "signed in successfully", accessToken });
    } catch (err) {
        return res.status(400).json({ msg: "error while signing in" });
    }
}

export async function signUp(req: Request, res: Response) {
    try {
        const { name, phone, email, password } = req.body;
        const exist = await User.findOne({ email });

        if (exist) return res.status(400).json({ msg: "user with the given email already exists" });

        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (req.file) {
            const imageName = Date.now() + "-" + req.file.originalname;
            const imagePath = `uploads/images/${imageName}`;

            await sharp(req.file.buffer).toFile(imagePath);
            await User.create({ name, phone, email, password: hashedPassword, picture: imageName });

        } else {
            await User.create({ name, phone, email, password: hashedPassword });
        }

        return res.status(201).json({ msg: "user created successfully" });
    } catch (err) {
        return res.status(400).json({ msg: "error while signing up" });
    }
}

export async function signOut(req: Request, res: Response) {
    try {

    } catch (err) {
        return res.status(400).json({ msg: "error while signing out" });
    }
}

export async function forgetPassword(req: Request, res: Response) {
    try {
        const { email } = req.body;
        const exist = await User.findOne({ email });

        if (!exist) return res.status(404).json({ msg: "user with the given email doesn't exist" });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        });

        const mailOptions = {
            from: 'your_email_address',
            to: email,
            subject: 'Password Reset',
            text: 'Click the following link to reset your password: '
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    } catch (err) {
        return res.status(400).json({ msg: "error while sending password reset link" });
    }
}

export async function resetPassword(req: Request, res: Response) {
    try {
        const { id, newPassword } = req.body;

    } catch (err) {
        return res.status(400).json({ msg: "error while resetting password" });
    }
}

function generateAccessToken(payload: any) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: "15m" });
}

function generateRefreshToken(payload: any) {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string);
}