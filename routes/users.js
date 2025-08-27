const express= require('express');
const route= express.Router();
const users= require('../controllers/users')
route.post('/signup',users.signUp);

module.exports= route;