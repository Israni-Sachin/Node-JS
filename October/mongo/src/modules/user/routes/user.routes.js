const userControllers = require('../controllers/user.controller');


const userRoutes = (app) => {

    app.get('/user',userControllers.userGet);
    app.post('/user',userControllers.userAdd);

}

module.exports = userRoutes;