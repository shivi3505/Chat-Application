const { Users } = require('../models/users');
const bcrypt= require('bcrypt');
const signUp= async (req,res)=>{
    try{
        const {name,email,phoneNumber,password}= req.body;
        if(!name||!email||!password||!phoneNumber){
            return res.status(400).json({message:"all fields are required"})
        }
      bcrypt.hash(password,process.env.SALT_ROUNDS, async (err,hash)=>{
        console.log(err);
        const user= await Users.create({name,email,phoneNumber,password: hash});
        res.status(201).json(user);

      })
        
    }catch(err){
      res.status(500).json({message:err.message});
    }

}

module.exports={
    signUp
}