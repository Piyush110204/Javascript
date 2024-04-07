import pool from '../getConnection.js';
export default class User{
    constructor(id,username,email,password,contact){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.contact = contact;
    }
    signUp(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                  reject(err);
                else{
                    let sql = "insert into users(username,email,password,contact) values(?,?,?,?)";
                    con.query(sql,[this.username,this.email,this.password,this.contact],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    })
                }  
            }) 
        });
    }
    signin(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                  reject(err);
                else{
                    let sql = "select * from users where email = ? and password = ?";
                    con.query(sql,[this.email,this.password],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    })
                }  
            }) 
        });
    }
    getAllUser(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err)reject(err);
                else{
                    let sql = "select * from users";
                    con.query(sql,(err,result)=>{
                        if(err)reject(err);
                        else
                        resolve(result);
                    });
                }
            });
        });
    }
    getOneUser(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }else{
                    let sql = "select * from users where id = "+id;
                    con.query(sql,(err,result)=>{
                        if(err){
                            console.log(err);
                            reject(err);
                        }
                        else{
                            resolve(result);
                        }
                    });
                }
            });
        });
    }
    deleteUser(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                else
                {
                    let sql = "delete from users where id ="+id;
                    con.query(sql,(err,result)=>{
                        if(err)reject(err);
                        else
                        resolve(result);
                    });
                }
            });
        });
    }
}