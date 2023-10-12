const userControllers = require('../controllers/user.controllers');
const tokenForManagerStaff = require('../../../../middlewares/managerStaff.middleware');
const tokenForManager = require('../../../../middlewares/manager.middleware');

const userRouter = (app) => {
    app.get("/user", tokenForManagerStaff, userControllers.userAll)
    app.post("/user", tokenForManager, userControllers.userAdd)
    app
        .route("/user/:id")
        .get(userControllers.userGetById)
        .patch(userControllers.userUpdate)
        .delete(userControllers.userDelete)

}

module.exports = userRouter;