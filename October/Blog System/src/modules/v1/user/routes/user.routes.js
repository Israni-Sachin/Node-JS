const userControllers = require('../controllers/user.controllers');
const { verifyToken } = require('../../../../middlewares/auth/jwt');

const userRoute = (app) => {
    
    app.get('/categorys',verifyToken, userControllers.categorysGet);
    app.get('/category',verifyToken, userControllers.categoryGetByName);

    app.get('/authors',verifyToken, userControllers.authorsGet);
    app.get('/author',verifyToken, userControllers.authorGetByName);
    
}


module.exports = userRoute;