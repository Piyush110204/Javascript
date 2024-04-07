import { DataTypes } from "sequelize";
import sequelize from "../dbCongig/dbConfig.js";
const User=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact: DataTypes.STRING
});
sequelize.sync()
.then(()=>{
    console.log("User table is created")
})
.catch((err)=>{
    console.log("User table not creted \n"+err);
})
export default User;