const userControllers = require('../controllers/user.controllers');
const tokenForManagerStaff = require('../../../../middlewares/managerStaff.middleware');
const tokenForManager = require('../../../../middlewares/manager.middleware');
const tokenForUser = require('../../../../middlewares/customer.middleware');

const userRouter = (app) => {
    app
        .route('/user')
        .get(userControllers.userProfile)
        .patch(userControllers.userProfileUpdate)
        .post(tokenForManager, userControllers.userAdd)

    app
        .route("/user/:id")
        .get(tokenForManagerStaff, userControllers.userGetById)
        .patch(tokenForManager, userControllers.userUpdate)
        .delete(tokenForManager, userControllers.userDelete)

    app.get("/users", tokenForManagerStaff, userControllers.userAll)
}

module.exports = userRouter;