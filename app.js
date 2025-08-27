const express= require('express');
const app= express();
const dotenv= require('dotenv');
dotenv.config();
const userRoute=require('./routes/users');
const DB= require('./utils/chatApplicationDB');
app.use('/user',userRoute);

DB.sync({alter:true})
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log(err);
})