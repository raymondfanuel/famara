import argon2  from 'argon2';
import { connectdb } from '../database/db.js';

let db = await connectdb();

export const verifyPassword = async (req, res, next)=>{
  const {email, password} = req.body;
  
  const [rows] = await db.execute("select * from users where email =?", [email]);

  if(rows.length === 0) return res.status(400).json({message: 'wrong Email or password', success: false, redirectTo: "/login"});
    
  const user = rows[0];

  if(await argon2.verify(user.password, password)){
    req.user = {id: user.id, username: user.username, email: user.email}
    next()
  }
  else{
   return res.status(400).json({message: "wrong Email or Password", success: false, redirectTo: "/login"});
  }


}