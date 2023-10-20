const userServices = require('../services/user.services')
let { successResponse, errorResponse } = require('../../../../helper/http_response')


const categoryGetById = async (req, res) => {
    try {
        let id = req.params.id
        let result = await userServices.categoryGetById(id);
        successResponse(res, 'category fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching category', error.status)
    }
}
const authorGetById = async (req, res) => {
    try {
        let id = req.params.id
        let result = await userServices.authorGetById(id);
        successResponse(res, 'author fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching author', error.status)
    }
}
const categoryGet = async (req, res) => {
    try {
        let data = req.params.page
        let token = req.user
        let result = await userServices.categoryGet(data, token);
        successResponse(res, 'category fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching category', error.status)
    }
}
const authorGet = async (req, res) => {
    try {
        let data = req.params.page
        let token = req.user
        let result = await userServices.authorGet(data, token);
        successResponse(res, 'author fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching author', error.status)
    }
}

module.exports = { categoryGetById, authorGetById, authorGet, categoryGet }