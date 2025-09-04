
const Users= require('../models/users');   
const Messages= require('../models/message');
const addMessages= async (req,res)=>{
    try{
    const {message}= req.body;
    if(!message){
        res.status(400).json({message:"message is required",success:false});

    } 
    const messageData= await Messages.create({message,userId:req.user.id});
    res.status(202).json({messageData,success:true});
}catch(err){
    res.status(500).json({message:err.message,success:false});
}
}
const getMessages= async (req,res)=>{
    try{
const usersWithMessage = await Users.findAll({
  include: {
    model: Messages,
    attributes:['message']
  },
  attributes: ['name'] 
});
if(usersWithMessage){
    res.status(200).json({data:usersWithMessage,success:true});
}
else{
    res.status(404).json({message:'no message found',success:false})
}
}catch(err){
res.status(500).json({message:err.message,success:false})
}
}
module.exports= {
    addMessages,
    getMessages
}