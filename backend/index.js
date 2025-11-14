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
app.use('/uploads', express.static('uploads'))

app.post('/form', async (req, res)=>{
    const {category, title, author} = req.body;
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

app.get('/posts', async (req, res)=>{
    let data = [];
    const [posts_rows] = await db.execute("select * from posts");
    if(posts_rows<0){
        return res.json({message: "No data available in posts"})
    }
    data  = posts_rows;
    for(let i = 0; i <posts_rows.length; i++){
   const [images_rows] = await db.execute("select * from images where post_id = ? order by position asc", [posts_rows[i].id]);
     data[i].file_name = [];
     data[i].content = [];
     for(let x = 0; x<images_rows.length; x++){
        data[i].file_name.push(images_rows[x].file_name);
        data[i].content.push(images_rows[x].content);
     }
    }

    res.json(data);

});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})