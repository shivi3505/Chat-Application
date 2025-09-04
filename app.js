const express= require('express');
const app= express();
const dotenv= require('dotenv');
const cors= require('cors')
dotenv.config();
const userRoute=require('./routes/users');
const messageRoute= require('./routes/messages')
const DB= require('./utils/chatApplicationDB');
const models= require('./models');
app.use(cors());
app.use(express.json());
app.use('/user',userRoute);
app.use('/',messageRoute)
DB.sync({})
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log(err);
})