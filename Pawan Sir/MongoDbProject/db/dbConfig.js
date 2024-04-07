import mongoose from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/userdb")
.then(()=>{
    console.log("MongoDb connected...");
}).catch(err=>{
    console.log("Connection Failed..");
    console.log(err);
});
export default mongoose.connection;