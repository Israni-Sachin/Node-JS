const userServices = require('../services/user.services')
let { successResponse, errorResponse } = require('../../../../helper/http_response')

const categoryGetByName = async (req, res) => {
    try {
        let name = req.query.name
        let result = await userServices.categoryGetByName(name);
        successResponse(res, 'category fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching category', error.status)
    }
}
const authorGetByName = async (req, res) => {
    try {
        let name = req.query.name
        let result = await userServices.authorGetByName(name);
        successResponse(res, 'author fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching author', error.status)
    }
}
const categorysGet = async (req, res) => {
    try {
        // let data = req.params.page
        // let token = req.user
        let result = await userServices.categorysGet();
        successResponse(res, 'categorys fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching categorys', error.status)
    }
}
const authorsGet = async (req, res) => {
    try {
        // let data = req.params.page
        // let token = req.user
        let result = await userServices.authorsGet();
        successResponse(res, 'author fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching author', error.status)
    }
}

module.exports = { categoryGetByName, authorGetByName, authorsGet, categorysGet }