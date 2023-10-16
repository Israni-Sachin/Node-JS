const productServices = require('../services/product.services')
let { successResponse, errorResponse } = require('../../../../helper/http_response')

const productGetById = async (req, res) => {
    try {
        let id = req.params.id
        let token = req.user
        let result = await productServices.productGetById(id, token);
        successResponse(res, 'Product fetched successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching product', error.status)
    }
}
const productsGet = async (req, res) => {
    try {
        let data = req.params.page
        let token = req.user
        let result = await productServices.productsGet(data, token);
        successResponse(res, 'Product fetched successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching product', error.status)
    }
}
const productAdd = async (req, res) => {
    try {
        let body = req.body;
        let data = await productServices.productAdd(body);
        successResponse(res, 'Product added successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding product', error.status)
    }
}
const productUpdate = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body;
        let token = req.user
        let result = await productServices.productUpdate(id, data, token);
        successResponse(res, 'Product updated successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating product', error.status)
    }
}
const productDelete = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await productServices.productDelete(id);
        successResponse(res, 'Product deleted successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while deleting product', error.status)
    }
}

module.exports = { productsGet, productGetById, productUpdate, productDelete, productAdd }