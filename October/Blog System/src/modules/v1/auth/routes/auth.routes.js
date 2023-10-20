const authController = require('../controllers/auth.controllers')
const validation = require('../validator/validator')
const Joi=require('joi');

// --------------------------- Schemas ------------------------------

const schema = Joi.object().keys({
    user_name: Joi.string().required(),
    user_phone: Joi.string().length(10).required(),
    user_email: Joi.string().email().lowercase().required({
        minDomainSegments: 2,
        tlds: { allow: ["com", "in"] }
    }),
    user_role: Joi.string().required().valid('user', 'author'),
    user_password: Joi.string().min(8).required(),
    user_confirm_password: Joi.string().valid(Joi.ref('user_password')).required()
}).unknown(false);

const loginScheme = Joi.object().keys({
    user_email: Joi.string().required(),
    user_password: Joi.string().required()
});

// ------------------------ Routes ----------------

const authRoutes = (app) => {
    app.post('/register', validation(schema), authController.register);
    app.post('/login', validation(loginScheme), authController.login);
}


module.exports = authRoutes