const productControllers = require('../controllers/product.controllers');
const tokenForManager = require('../../../../middlewares/manager.middleware')

const productRoute = (app) => {
    app
        .route("/product")
        .post(tokenForManager, productControllers.productAdd)

    app
        .route("/product/:name")
        .get(productControllers.productGetByName)
        .patch(tokenForManager, productControllers.productUpdate)
        .delete(tokenForManager, productControllers.productDelete)

    app.get('/products/:page', productControllers.productsGet)
}


module.exports = productRoute;