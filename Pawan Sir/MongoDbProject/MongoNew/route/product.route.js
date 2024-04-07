import express from "express";
import { saveInBulk } from "../controller/product.controller.js";
import { auth } from "../auth/auth.js";
const router = express.Router();
router.post("/save-in-bulk",auth,saveInBulk);
export default router;