const blogControllers = require('../controllers/blog.controllers');
const { verifyToken } = require('../../../../middlewares/auth/jwt');
const tokenForAuthor = require('../../../../middlewares/author.middleware');

const userRouter = (app) => {
    app.get('/blog/:id', verifyToken, tokenForAuthor, blogControllers.blogGet)
    app.post('/blog', verifyToken, tokenForAuthor, blogControllers.blogAdd)
    app.get('/blogs', verifyToken, tokenForAuthor, blogControllers.blogAll)
    app.delete('/blog', verifyToken, tokenForAuthor, blogControllers.blogDelete)
    
}

module.exports = userRouter;