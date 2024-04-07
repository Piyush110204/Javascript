import express from "express";
import { signIn, signUp } from "../controller/user.controller.js";
const router=express.Router();
router.post('/SignUp',signUp);
router.post("/SignIn",signIn)
export default router;