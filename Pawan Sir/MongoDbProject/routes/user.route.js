import express from "express";
import { save } from "../controller/user.controller.js";
const router=express.Router();
router.post('/SignUp',save);
export default router;