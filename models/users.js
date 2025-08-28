const {Sequelize,DataTypes}= require('sequelize');
const Users= require('../utils/chatApplicationDB');
const { type } = require('os');
const users= Users.define('users',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.BIGINT,
        allowNull:false,
    },
    password:{
         type:DataTypes.STRING,
         allowNull:false
    }
    
})
module.exports= users;