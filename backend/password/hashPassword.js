import argon2 from 'argon2';

export async function hashPassword(req, res, next) {
    try{
    if(!req.body.password){
        return res.status(400).json({error: "password required"});
    }
    req.body.passwordHash = await argon2.hash(req.body.password);
       delete req.body.password;
       next();
    }
    catch(err){
        console.error("failed to hash password", err);
    }
}

