const blogServices = require('../services/blog.services')
const { successResponse, errorResponse } = require('../../../../helper/http_response')

const blogGet = async (req, res) => {
    try {
        let data = req.params.id;
        let result = await blogServices.blogGet(data);
        if (result.length == 0) return res.status(404).json("Blog not found");
        successResponse(res, 'Blog fetched successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching blog', error.status);
    }
}
const blogAll = async (req, res) => {
    try {
        let data = req.user.user_id;
        let result = await blogServices.blogAll(data);
        successResponse(res, 'Blogs fetched successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching blogs', error.status);
    }
}
const blogAdd = async (req, res) => {
    try {
        let body = req.body;
        let token = req.user;
        let data = await blogServices.blogAdd(body, token);
        if (data == false) return res.status(400).json('You are not allowed to post blog')
        successResponse(res, 'Blog added successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding blog', error.status);
    }
}
const blogDelete = async (req, res) => {
    try {
        let data = req.params.id;
        let result = await blogServices.blogDelete(data);
        successResponse(res, 'Blog deleted successfully', result);

    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while deleting the blog', error.status);

    }
}
module.exports = {
    blogGet,
    blogAdd,
    blogAll,
    blogDelete
}