const express= require('express');
const route= express.Router();
const messages= require('../controllers/messages');
const {authenticate}= require('../middleware/userAuthentication')
route.post('/message',authenticate,messages.addMessages);
route.get('/message',messages.getMessages);
module.exports= route;