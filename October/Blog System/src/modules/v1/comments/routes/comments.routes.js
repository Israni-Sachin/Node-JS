const commentsControllers = require('../controllers/comments.controllers');
const { verifyToken } = require('../../../../middlewares/auth/jwt');
const tokenForUser = require('../../../../middlewares/user.middleware');

const userRoute = (app) => {

    app.post('/comment/:id', verifyToken, tokenForUser, commentsControllers.commentAdd);

}


module.exports = userRoute;