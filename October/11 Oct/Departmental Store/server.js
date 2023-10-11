// ------------------------ all imports ------------------------

const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

// ------------------------------------------------

const register = require('./modules/v1/store/controllers/register.controllers')
const loginAuth = require('./modules/v1/store/controllers/logging.controllers')
const verifyToken = require('./middlewares/auth/jwt.js');

// ------------------------ all endpoints ------------------------

app.post('/register',register);
app.post('/login',loginAuth);
app.get('/mart',verifyToken.verifyToken,(req,res)=>{
    console.log("You are successfully logged in");
    res.json("You are successfully logged in")
});



app.get('/user',(req,res)=>{
    res.json("Redirected to user home");   
})

app.use('/',(req,res)=>{
    // res.json("Welcome to express");
    res.redirect('/user')
})
app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${process.env.PORT} port`);
});