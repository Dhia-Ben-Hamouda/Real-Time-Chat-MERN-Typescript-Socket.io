import express from "express";

const router = express.Router();
router.use(express.json());

router.post("/signIn" , );
router.post("/signUp" , );
router.post("/forgetPassword" , );
router.patch("/resetPassword" , );
router.post("/signOut" , );

export default router;