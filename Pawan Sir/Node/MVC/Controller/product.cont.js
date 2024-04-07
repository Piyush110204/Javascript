import bodyParser from "body-parser";
import Product from "../Model/product.model.js";
var product = new Product();
export const addProduct = (req,res) => {
    let {pname,price,catagory,quentity}=req.body;
     product = new Product(null,pname,price,catagory,quentity);
    product.addProduct().then(result =>{
      return res.status(200).json({massage:"Product Add Succes"});
    }).catch(err=>{
        return res.status(500).json({massage:"Internal Server Error...."});
    });
}
export const getAllProduct = (req,res)=>{
   product = new Product();
  product.getAllProduct().then(result=>{
    return res.status(200).json({massege:result});
  }).catch(err=>{
    return res.status(500).json({massage:"Internal Server Error"});
  });
}
export const getOneProduct = (req,res)=>{
  let id = req.params.id;
  product.getOneProduct(id).then(result=>{
    return res.status(200).json({massage:result});
  }).catch(err=>{
    res.status(500).json({massage:"Internal Server Error"});
  });
}
export const updateProduct = (req,res)=>{
  console.log("asdaksdjaijk");
  let a=req.params.update;
  let b=req.params.value;
  let c=req.params.id;
    product.updateProduct(a,b,c).then(result=>{
      return res.status(200).json({massage:result});
    }).catch(err=>{
      console.log(err);
      return res.status(500).json({massage:"Internal Server Error"});
    });
}
export const deleteProduct = (req,res)=>{
  let id = req.params.id;
  product.deleteProduct(id).then(result=>{
    return res.status(200).json({massage:"Delete Done"});
  }).catch(err=>{
    res.status(500).json({massage:"Internal Server Error"});
  });
}