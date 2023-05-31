import express from "express";
import { forgetPassword, refreshTokens, resetPassword, signIn, signOut, signUp } from "../controllers/authController";

const router = express.Router();
router.use(express.json());

router.post("/signIn" , signIn);
router.post("/signUp" , signUp);
router.post("/forgetPassword" , forgetPassword);
router.patch("/resetPassword" , resetPassword);
router.post("/signOut" , signOut);
router.post("/refresh" , refreshTokens);

export default router;