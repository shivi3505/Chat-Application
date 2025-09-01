
const  Users  = require('../models/users');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken')
const signUp= async (req,res)=>{
    try{
        const {name,email,phoneNumber,password}= req.body;
        if(!name||!email||!password||!phoneNumber){
            return res.status(400).json({message:"all fields are required"})
        }
      const userAlreadyExist= await Users.findOne({where:{
        email: email
      }});
      if(userAlreadyExist){
        res.status(409).json({message:'User already exist'});
      }
      const saltRounds= Number(process.env.SALT_ROUNDS)||10;
      bcrypt.hash(password,saltRounds, async (err,hash)=>{
        console.log(err);
        const user= await Users.create({name,email,phoneNumber,password: hash});
        res.status(201).json(user);

      })
        
    }catch(err){
      res.status(500).json({message:err.message});
    }

}
const login= async (req,res)=>{
    //const errors={};
    try{
    const {email,password} = req.body;
    const user= await Users.findOne({
        where:{
            email:email
        }
    })
 
    
   if(user){
    const isMatch= await bcrypt.compare(password, user.password);
    if(isMatch){
       // errors.password= 'Password is incorrect';
    const token=  generateAccessToken(user.id);
        res.status(200).json({token:token});
      
    }
    else{
        res.status(401).json({message:'User not authorized'});
    }
   
       
    }else{
        res.status(404).json({message:'user not found'});
    }
    
    }catch(err){
      console.log(err);
       res.status(500).json({message:err.message});
    }
    
}
function generateAccessToken(id) {
    return  jwt.sign({userId:id},process.env.SECRET_TOKEN_KEY)
}
module.exports={
    signUp,
    login
}