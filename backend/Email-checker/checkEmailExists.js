
import { connectdb } from "../database/db.js"
let db = await connectdb();
export const checkEmail = async (req, res, next)=>{
    const {email} = req.body;
    if(!email){
        return res.status(400).json({message: 'Email is required'});
    }
    try{
      const [rows] = await db.execute("select * from users where email = ?", [email])
      if(rows.length>0){
        return res.status(409).json({message: "email is already registered"});
      }
      else{
        next()
      }
    }
    catch(err){
        console.error("Failed to check Email", err);
    }
   
}