const {Sequelize,DataTypes}= require('sequelize');
const DB= require('../utils/chatApplicationDB');
const messages= DB.define('messages',{
    message:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports= messages