import express from "express";
import { addToCart, fetchCart, removeCart } from "../controller/cart.model.controller.js";

const router=express.Router();
router.get("/add-to-cart",addToCart);
router.get("/getCart/:userId",fetchCart);
router.post("/removeCart",removeCart);
export default router;