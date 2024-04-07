import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserRoute from "./route/user.route.js";
import CategoryRoute from "./route/category.route.js";
import ProductRoute from "./route/product.route.js";
import CartRouter from "./route/cart.route.js";
const app=express();
mongoose.connect("mongodb://0.0.0.0:27017/shopping")
.then(result=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/user",UserRoute);
    app.use("/product",ProductRoute);
    app.use("/category",CategoryRoute);
    app.use("/cart",CartRouter);
    app.listen(3000,()=>{
        console.log("Server Start")
    })
})
.catch(err=>console.log("Connection Failed \n"+err))