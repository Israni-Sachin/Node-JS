// ------------------------ all imports ------------------------

const express = require('express');
const app = express();
const apiRoutes = require('./api/v1/index');
const login = require('./modules/v1/auth/controllers/logging.controllers');
const { verifyToken } = require('./middlewares/auth/jwt');
const register = require('./modules/v1/auth/controllers/register.controllers');
require('dotenv').config();
app.use(express.json());

app.use('/image',express.static('./public'));

app.use('/register', register)
app.use('/login', login);
app.use('/', verifyToken, apiRoutes());

// const register = require('./modules/v1/register/controllers/register.controllers')
// const loginAuth = require('./modules/v1/login/controllers/logging.controllers')
// const verifyToken = require('./middlewares/auth/jwt.js');
// const routes=require('./modules/v1/store/routes/index')

// ------------------------ all endpoints ------------------------

// app.post('/register',register);
// app.post('/login',loginAuth);
// app.get('/mart',verifyToken.verifyToken,routes);



// app.get('/user',(req,res)=>{
//     res.json("Redirected to user home");   
// })

// app.use('/',(req,res)=>{
//     // res.json("Welcome to express");
//     res.redirect('/user')
// })

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${process.env.PORT} port`);
});