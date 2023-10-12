const registerController = require('../controllers/register.controllers')

const registerRoutes = (app) => {
    console.log("registerRoutes");
    app.post('/register', registerController);
}

module.exports = registerRoutes 