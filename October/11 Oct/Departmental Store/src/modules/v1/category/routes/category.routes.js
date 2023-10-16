const categoryControllers = require('../controllers/category.controllers');
const tokenForManager = require('../../../../middlewares/manager.middleware')

const categoryRoute = (app) => {
    app
        .route("/category")
        .post(tokenForManager, categoryControllers.categoryAdd)

    app
        .route("/category/:id")
        .get(categoryControllers.categoryGetById)
        .patch(tokenForManager, categoryControllers.categoryUpdate)
        .delete(tokenForManager, categoryControllers.categoryDelete)

    app.get('/categorys/:page', categoryControllers.categorysGet)
}


module.exports = categoryRoute;