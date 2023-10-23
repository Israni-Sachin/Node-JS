const express = require('express');
const authRoutes = require('../../modules/v1/auth/routes/auth.routes');
const blogRoutes = require('../../modules/v1/blog/routes/blog.routes');
const userRoutes = require('../../modules/v1/user/routes/user.routes');
const commentRoutes=require('../../modules/v1/comments/routes/comments.routes');

module.exports = () => {
    const app = express.Router()
    authRoutes(app)
    blogRoutes(app)
    userRoutes(app)
    commentRoutes(app)
    return app;
}