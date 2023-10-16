const categoryServices = require('../services/category.services')
const { successResponse, errorResponse } = require('../../../../helper/http_response')
// successResponse(res, 'product fetched successfully', data);
// errorResponse(res, 'Error while getting product', error.status);

const categoryGetById = async (req, res) => {
    try {
        let data = req.params.id
        let result = await categoryServices.categoryGetById(data);
        successResponse(res, 'category fetched successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting category', error.status);
    }
}
const categorysGet = async (req, res) => {
    try {
        let data = req.params.page
        let result = await categoryServices.categorysGet(data);
        successResponse(res, 'categorys fetched successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while getting categorys', error.status);
    }
}
const categoryAdd = async (req, res) => {
    try {
        let body = req.body;
        let data = await categoryServices.categoryAdd(body);
        successResponse(res, 'Category added successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding category', error.status);
    }
}
const categoryUpdate = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let result = await categoryServices.categoryUpdate(id, data);
        successResponse(res, 'Category updated successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating category', error.status);
    }
}
const categoryDelete = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await categoryServices.categoryDelete(id);
        successResponse(res, 'Category deleted successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while deleting category', error.status);
    }
}

module.exports = { categorysGet, categoryGetById, categoryUpdate, categoryDelete, categoryAdd }