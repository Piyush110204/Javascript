import { User } from "../model/user.model.js"
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const updateProfile = async (request, response, next) => {
    let userId = request.body.userId;
}
export const signUp = async (req, res, next) => {
    try {

        const errors = validationResult(req);
        console.log(req.body);
        if (errors.isEmpty()) {
            let fileName = "";
            if (req.file)
                fileName = request.file.filename;
            req.body.profile=fileName;
            let password = req.body.password;
            let saltKey = bcrypt.genSaltSync(10);
            password = bcrypt.hashSync(password, saltKey);
            req.body.password = password;
            let result = await User.create(req.body);
            result = result.toObject();
            delete result.password;
            return res.status(200).json({ result: result });
        }
        else {
            return res.status(401).json({ error: errors });
        }

    }
    catch (err) {
        console.log(err);
        console.log("Bhai Koi Error hai")
        return res.status(500).json({ err: "Internal Server Error" })
    }
}
export const signIn = async (request, response, next) => {
    try {
        console.log(request.body);
        let { email, password } = request.body;
        let user = await User.findOne({ email });
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                return response.status(200).json({ user: user, token: generateToken(email) });
            }
            else {
                return response.status(401).json({ message: "Password Not Match" });
            }
        }
        else
            return response.status(401).json({ message: "Username Not Founds" });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}
const generateToken = (email) => {
    let payload = { subject: email };
    return jwt.sign(payload, "klsnd8asdkasldmr9374rasd98")
}