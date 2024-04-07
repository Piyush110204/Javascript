import pool from './GetConnection.js'
import express from 'express'
import bodyParser from 'body-parser'

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.post('/user/signup',(request,response,next)=>{
    pool.getConnection((err,con)=>{
        if(err){
            console.log(err);
            return response.status(500).json({"error" : "Internal server error"});
        }
        else{
            console.log(request.body);
            let {username, id}=request.body;
            let sql='insert into user(username,id) values (?,?)';
            console.log(username);
            con.query(sql,[username,id],(err,result)=>{
                if(err){
                    console.log(err);
                    return response.status(500).json({"error" : "Internal server error"});
                }
                else{
                    return response.status(500).json({"result" : "Data insert Successsfully"});
                }
            })
        }
    });
})
app.listen(3000,()=>{
    console.log('server satarted');
})