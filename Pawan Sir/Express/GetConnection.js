import mysql from 'mysql2'

const pool  = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database: 'ExpressProject',
    connectionLimit : 100
});

export default pool;