const cartControllers = require('../controllers/cart.controllers');
const tokenForManager = require('../../../../middlewares/manager.middleware')

const cartRoute = (app) => {
    app
        .route("/cart")
        .post(cartControllers.cartAdd)

    app
        .route("/cart/:id")
        .get(cartControllers.cartGetById)
        .patch(tokenForManager, cartControllers.cartUpdate)
        .delete(tokenForManager, cartControllers.cartDelete)

}


module.exports = cartRoute;