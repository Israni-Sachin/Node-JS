const orderControllers = require('../controllers/order.controllers');
// const tokenForManager = require('../../../../middlewares/manager.middleware')
const tokenForCustomer = require('../../../../middlewares/customer.middleware');
const tokenForManager = require('../../../../middlewares/managerStaff.middleware');

const orderRoute = (app) => {
    app
        .route("/order")
        .get(tokenForCustomer, orderControllers.orderGet)
        
    app
        .route("/order/:id")
        .get(tokenForManager, orderControllers.orderGetById)

    // app.redirect('/orders/1')
    app.get('/orders/:page', tokenForManager, orderControllers.ordersGet)
}


module.exports = orderRoute;