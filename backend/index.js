import express from 'express';
import session from 'express-session'
import bodyParser from 'body-parser';
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
app.use(cors({origin: "https://fmg-clone-ray-hsti.vercel.app", credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(upload.array('images'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json());
app.use(session({
    secret: "super",
    resave: false,
    saveUninitialized: false,
    cookie: {httpOnly: true, maxAge: 1000 * 60 * 60}
}))

//post value to backend
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
    const {content} = req.body;
    if(!Array.isArray(content)){
         try{
        const [result2] = await db.execute(`insert into images(post_id, file_name, content, position)
             values(?,?,?,?)`, [id, filename, content, i]);
    }
    catch(err){
        console.log("failed to send images", err);
    }
     return res.json({message: "success to post one image"})
    }
    try{
        const [result2] = await db.execute(`insert into images(post_id, file_name, content, position)
             values(?,?,?,?)`, [id, filename, content[i], i]);
    }
    catch(err){
        console.log("failed to send images", err);
    }
 }
    res.json({message: "succesfully posted a blog"});
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
    const {id, username} = req.user;
    req.session.userId = id;
    req.session.name = username;
    res.json({success: true, redirectTo: "/admin"}) 
})

//get values from backend
app.get('/posts', async (req, res)=>{
    const {id} = req.query;
    if(id){
    const [result] = await db.execute("select * from posts where id = ?", [id]);
    result[0].file_name = [];
    result[0].content= [];
    const [images_rows] = await db.execute("select * from images where post_id = ? order by position asc", [id]);
    for(let i = 0; i<images_rows.length; i++){
        result[0].file_name.push(images_rows[i].file_name);
        result[0].content.push(images_rows[i].content);
    }
        return res.json(result)
    }
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

// keep user looged in or out
app.get("/session", (req, res)=>{
    if(!req.session.userId){
        return res.status(401).json({loggedIn: false});
    }
    res.json({loggedIn: true, username: req.session.name});
})
app.get("/logout", (req, res)=>{
    req.session.destroy(err=>{
        if(err) return res.status(500).json({error: "failed to logout"});

        res.clearCookie("connect.sid");
        res.json({message: "Logged out successfully", loggedOut: true});
    });
});
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})