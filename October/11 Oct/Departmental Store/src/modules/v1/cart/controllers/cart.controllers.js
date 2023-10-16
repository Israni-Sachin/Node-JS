const cartServices = require('../services/cart.services')
let { successResponse, errorResponse } = require('../../../../helper/http_response')

const cartGetById = async (req, res) => {
    try {
        let id = req.params.id
        let token = req.user
        let result = await cartServices.cartGetById(id, token);
        successResponse(res, 'cart fetched successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching cart', error.status)
    }
}
const cartsGet = async (req, res) => {
    try {
        let data = req.params.page
        let token = req.user
        let result = await cartServices.cartsGet(data, token);
        successResponse(res, 'cart fetched successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching cart', error.status)
    }
}
const cartAdd = async (req, res) => {
    try {
        let body = req.body;
        let data = await cartServices.cartAdd(body);
        successResponse(res, 'cart added successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding cart', error.status)
    }
}
const cartUpdate = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body;
        let token = req.user
        let result = await cartServices.cartUpdate(id, data, token);
        successResponse(res, 'cart updated successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating cart', error.status)
    }
}
const cartDelete = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await cartServices.cartDelete(id);
        successResponse(res, 'cart deleted successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while deleting cart', error.status)
    }
}

module.exports = { cartsGet, cartGetById, cartUpdate, cartDelete, cartAdd }