const loginController = require('../controllers/logging.controllers')

const loginRoutes = (app) => {
    console.log("loginRoutes");
    app.post('/login', loginController);
    // console.log(loginController);
}

module.exports = loginRoutes 