import { Sequelize } from "sequelize";
const sequelize=new Sequelize("mpif7","root","root",{
    host:'localhost',
    dialect:"mysql"
});
sequelize.authenticate()
.then(()=>{
    console.log("Database connected......")
}).catch((err)=>{
    console.log("database connection failed in /dbconfig/dbconfig.js");
    console.log(err);
})
export default sequelize;