import express from "express";
import user from "../Model/user.model.js";
import { deleteUser, getallUser, getOneUser, signUp,signin } from "../Controller/user.cont.js";

const router=express.Router();

router.post("/singup",signUp);
router.post("/signin",signin);
router.get("/getalluser",getallUser);
router.get("/getoneuser",getOneUser);
router.delete("/deleteuser",deleteUser);

export default router;