import http from 'http';
import fs from 'fs';
const server = http.createServer((req,res)=>{
    let data=fs.readFileSync('first.html',(err,data)=>{
        err ? console.log(err) : console.log(data);
        res.end(data);
    });
});
server.listen(3000,()=>{
    console.log("Sever started...");
})
console.log('hello');