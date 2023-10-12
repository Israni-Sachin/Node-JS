const express = require('express');
// const registerRoutes = require('../../modules/v1/auth/routes/register.routes')
// const loginRoutes = require('../../modules/v1/auth/routes/login.routes')
const userRoutes = require('../../modules/v1/user/routes/user.routes')
const productRoute = require('../../modules/v1/product/routes/product.routes')

module.exports = () => {
    console.log("api,v1");
    const app = express.Router()
    // registerRoutes(app)
    // loginRoutes(app)
    userRoutes(app)
    productRoute(app)
    return app;
}