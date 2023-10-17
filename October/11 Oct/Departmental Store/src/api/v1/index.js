const express = require('express');
// const registerRoutes = require('../../modules/v1/auth/routes/register.routes')
// const loginRoutes = require('../../modules/v1/auth/routes/login.routes')
const userRoutes = require('../../modules/v1/user/routes/user.routes');
const productRoute = require('../../modules/v1/product/routes/product.routes');
const categoryRoutes = require('../../modules/v1/category/routes/category.routes');
const cartRoute = require('../../modules/v1/cart/routes/cart.routes');
const orderRoute = require('../../modules/v1/order/routes/order.routes');

module.exports = () => {
    console.log("api,v1");
    const app = express.Router()
    // registerRoutes(app)
    // loginRoutes(app)
    userRoutes(app)
    categoryRoutes(app)
    productRoute(app)
    cartRoute(app)
    orderRoute(app)
    // userProfileRoute(app)
    return app;
}