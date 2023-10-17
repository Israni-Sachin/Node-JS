const cartServices = require('../services/cart.services')
let { successResponse, errorResponse } = require('../../../../helper/http_response')


const cartGet = async (req, res) => {
    try {
        let token = req.user
        let result = await cartServices.cartGet(token);
        successResponse(res, 'Successfully fetched', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching cart', error.status);
    }
}

const cartGetById = async (req, res) => {
    try {
        let id = req.params.id
        let result = await cartServices.cartGetById(id);
        successResponse(res, 'cart fetched successfully', result)
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
        successResponse(res, 'cart fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching cart', error.status)
    }
}

const cartAdd = async (req, res) => {
    try {
        let id = req.user.user_id;
        let body = req.body;
        let data = await cartServices.cartAdd(body, id);
        successResponse(res, 'cart added successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding cart', error.status)
    }
}
const cartUpdate = async (req, res) => {
    try {
        let body = req.body;
        let id = req.user.user_id;
        let result = await cartServices.cartUpdate(body, id);
        successResponse(res, 'cart updated successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating cart', error.status)
    }
}
const cartDelete = async (req, res) => {
    try {
        let id = req.user.user_id;
        let result = await cartServices.cartDelete(id);
        successResponse(res, 'cart deleted successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while deleting cart', error.status)
    }
}

module.exports = { cartsGet, cartGetById, cartUpdate, cartDelete, cartAdd, cartGet }