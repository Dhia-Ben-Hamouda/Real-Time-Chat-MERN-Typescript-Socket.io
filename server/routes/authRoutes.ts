import express from "express";
import { forgetPassword, refreshTokens, resetPassword, signIn, signOut, signUp } from "../controllers/authController";
import upload from "../middleware/uploadMiddleware";

const router = express.Router();
router.use(express.json());

router.post("/signIn" , signIn);
router.post("/signUp" , upload.single("picture") , signUp);
router.post("/forgetPassword" , forgetPassword);
router.patch("/resetPassword" , resetPassword);
router.post("/signOut" , signOut);
router.post("/refresh" , refreshTokens);

export default router;