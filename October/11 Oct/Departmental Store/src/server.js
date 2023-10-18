const express = require('express');
const app = express();
const Joi = require('joi');
require('dotenv').config();

// ----------------------- imports --------------------------------

const apiRoutes = require('./api/v1/index');
const login = require('./modules/v1/auth/controllers/logging.controllers');
const { verifyToken } = require('./middlewares/auth/jwt');
const register = require('./modules/v1/auth/controllers/register.controllers');
const validation = require('./middlewares/register.validator')

// ----------------------- schema --------------------------------

const schema = Joi.object().keys({
    user_firstname: Joi.string().required(),
    user_lastname: Joi.string().required(),
    user_phone: Joi.string().length(10).required(),
    user_email: Joi.string().email().lowercase().required({
        minDomainSegments: 2,
        tlds: { allow: ["com", "in"] }
    }),
    user_gender: Joi.string().required(),
    user_role: Joi.string().optional(),
    user_password: Joi.string().min(8).required(),
    confirm_password: Joi.string().valid(Joi.ref('user_password')).required()
}).unknown(false);

const loginScheme = Joi.object().keys({
    user_email: Joi.string().required(),
    user_password: Joi.string().required()
})

// --------------------------- API ------------------------

app.use(express.json());
// app.use('/joi', validation)
app.use('/image', express.static('./public'));

app.use('/register', validation(schema), register)
app.use('/login', validation(loginScheme), login);
app.use('/', verifyToken, apiRoutes());


app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${process.env.PORT} port`);
});

// -----------------------------------------------------------------------------------------------

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