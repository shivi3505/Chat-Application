const jwt= require('jsonwebtoken');
const Users= require('../models/users.js');

const authenticate= (req,res,next)=>{
    try{
        const token= req.headers['token'];
         
        if(!token){
            return res.status(401).json({message:'token is missing'})
        }
       const userid= jwt.verify(token,process.env.SECRET_TOKEN_KEY);
        
          Users.findByPk(userid.userId).then((user)=>{
            req.user= user;
            next();
          })
        .catch((err)=>{
             throw new  Error(err)
        })

    }catch(err){
      res.status(500).json({message:err.message});
    }
}
module.exports= {
    authenticate
};