import pool  from "../getConnection.js";
export default class Product{
    constructor(id,pname,price,catagory,quentity){
        this.id=id;
        this.pname=pname;
        this.price=price;
        this.catagory=catagory;
        this.quentity=quentity;
    }
    addProduct(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                {
                    console.log(err);
                    reject(err);
                }
                else{
                    let sql="insert into product(pname,price,catagory,quentity) values(?,?,?,?)";
                    con.query(sql,[this.pname,this.price,this.catagory,this.quentity],(err,result)=>{
                        con.release();
                        if(err)reject(err);
                        else
                        resolve(result);
                    });
                }
            });

        });
    }
    getAllProduct(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                else{
                    let sql = "select * from product";
                    con.query(sql,(err,result)=>{
                        con.release();
                        if(err)reject(err);
                        else
                        resolve(result);
                    });
                }
            });
        });
    }
    getOneProduct(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                else{
                    let sql = "select * from product where id ="+id;
                    con.query(sql,(err,result)=>{
                        con.release();
                        if(err)
                        reject(err);
                        else
                        resolve(result);
                    });
                }
            });
        });
    }
    updateProduct(update,value,id){
        return new Promise((resolve,reject)=>{
            console.log(update)
            if (update === "pname" || update === "price") {
             let   sql = `update product set ${update} = ? where id = ?`;
                pool.getConnection((err, con) => {
                    if (err) {
                        console.log(err);
                       reject(err);
                    } else {
                        con.query(sql, [value, id], (err, result) => {
                            con.release();
                            if (err) {
                               console.log(err);
                               reject(err)
                            } else {
                                resolve(result);
                            }
                        });
                    }
                });
            } else {
              reject("wrong input");
            }
      });
   }
   deleteProduct(id){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            else{
                let sql = "delete from product where id = " + id;
                con.query(sql,(err,result)=>{
                    con.release();
                    if(err)
                    reject(err);
                    else
                    resolve(result);
                });
            }
        });
    });
}
}