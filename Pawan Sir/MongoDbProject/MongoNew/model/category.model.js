import mongoose from "mongoose";
const categoryScema=new mongoose.Schema({
    categoryName:String
});

export const Category = mongoose.model('category',categoryScema);