const orderControllers = require('../controllers/order.controllers');
// const tokenForManager = require('../../../../middlewares/manager.middleware')
const tokenForManagerStaff = require('../../../../middlewares/managerStaff.middleware')
const tokenForCustomer = require('../../../../middlewares/customer.middleware')

const orderRoute = (app) => {
    app
        .route("/order")
        .get(tokenForCustomer, orderControllers.orderGet)
        
    app
        .route("/order/:id")
        .get(tokenForManagerStaff, orderControllers.orderGetById)

    app.get('/orders', tokenForManagerStaff, orderControllers.ordersGet)
}


module.exports = orderRoute;