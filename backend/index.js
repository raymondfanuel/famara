import express from 'express';
import multer from 'multer';
import cors from 'cors'
import { hashPassword } from './password/hashPassword.js';
import { storage } from './multer/multer.js';
import { connectdb } from './database/db.js';
import { checkEmail } from './Email-checker/checkEmailExists.js';
import { verifyPassword } from './password/verifypassword.js';


const PORT = 5001;
let db = await connectdb();

const upload = multer({
    storage,
    });
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(upload.array('images'))

app.post('/form', async (req, res)=>{
    const {category, title, author} = req.body;
    console.log(req.body);
    console.log(req.files);
    let id;
 try{
   const [result] = await db.execute(`insert into posts (category, title, author)
         values(?,?,?)`, [category, title, author]);
     id = result.insertId;
 }
 catch(err){
    console.log("failed to post  data", err);
 }

 for(let i = 0; i<req.files.length; i++){
    const {filename} = req.files[i];
    const {content} = req.body
    try{
        const [result2] = await db.execute(`insert into images(post_id, file_name, content, position)
             values(?,?,?,?)`, [id, filename, content[i], i]);
    }
    catch(err){
        console.log("failed to send images", err);
    }
 }
    res.json({message: 'success'});
})


app.post('/signup', hashPassword, checkEmail,  async (req, res)=>{
const {username, email, passwordHash} = req.body;
try{
    const [result] = await db.execute("insert into users(username, email, password) values(?,?,?)",
         [username, email, passwordHash]);
         res.json({message: "user signed in"});
}
catch(err){
    console.error("failed to Signup", err)
}

})

app.post('/login', verifyPassword, (req, res)=>{
    res.status(200).json({message: "welcome to backend baby"});
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})