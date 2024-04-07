import express from 'express';
import { body } from 'express-validator';
import { signUp,signIn } from '../controller/user.controller.js';
import multer from 'multer';
const upload=multer({dest:"public/images/"})
const router=express.Router();
router.post("/SignUp",body("username","Username is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password should conain at least 6 letter").isLength({min:6}),
body("email","Invalid Email Id").isEmail(),
body("email","email is reqired").notEmpty(),upload.single("profile"),signUp);
router.post("/SignIn",signIn)
router.post("/update-pofile")

export default router;