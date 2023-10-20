const userControllers = require('../controllers/user.controllers');

const userRoute = (app) => {

    app.get('/category', userControllers.categoryGet);
    app.get('/category/:id', userControllers.categoryGetById);

    app.get('/author', userControllers.authorGet);
    app.get('/author/:id', userControllers.authorGetById);
    
}


module.exports = userRoute;