
import mysql from 'mysql2/promise';
let db;
export const connectdb = async ()=>{
    try{
 db = await mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "db"
  });
   return db;
    }
    catch(err){
        console.log("failed to connect", err);
    }
 
}