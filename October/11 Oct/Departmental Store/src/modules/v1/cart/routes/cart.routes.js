const cartControllers = require('../controllers/cart.controllers');
// const tokenForManager = require('../../../../middlewares/manager.middleware')
const tokenForManagerStaff = require('../../../../middlewares/managerStaff.middleware')
const tokenForCustomer = require('../../../../middlewares/customer.middleware')

const cartRoute = (app) => {
    app
        .route("/cart")
        .get(tokenForCustomer, cartControllers.cartGet)
        .post(tokenForCustomer, cartControllers.cartAdd)
        .patch(tokenForCustomer, cartControllers.cartUpdate)
        .delete(tokenForCustomer, cartControllers.cartDelete)
    app
        .route("/cart/:id")
        .get(tokenForManagerStaff, cartControllers.cartGetById)

    app.get('/carts', tokenForManagerStaff, cartControllers.cartsGet)
}


module.exports = cartRoute;