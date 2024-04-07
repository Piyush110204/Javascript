import express from "express";
// import user from "../Model/user.model.js";
import {addProduct , getAllProduct , getOneProduct, updateProduct,deleteProduct} from "../Controller/product.cont.js";

const router=express.Router();

router.post("/addproduct",addProduct);
router.get("/getAllProduct",getAllProduct);
router.get("/getOneProduct/:id",getOneProduct);
router.put("/updateProduct/:update/:value/:id",updateProduct);
router.delete("/deleteProduct/:id",deleteProduct);

export default router;