import express from "express";
import bodyParser from "body-parser";
import userrouter from "./routes/user.route.js";
import productrouter from "./routes/product.route.js";
  
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/user",userrouter);
app.use("/product",productrouter);

app.listen(3000,()=>{
     console.log("Server start succes");
});