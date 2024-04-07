import sequelize from "./dbCongig/dbConfig.js";
import UserRouter from "./route/user.route.js";
import bodyParser from "body-parser";
import express from "express";
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",UserRouter)
app.listen(3000,()=>{
    console.log("server started");
})