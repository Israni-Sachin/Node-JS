const orderServices = require('../services/order.services')
let { successResponse, errorResponse } = require('../../../../helper/http_response')

const orderGet = async (req, res) => {
    try {
        let token = req.user
        let result = await orderServices.orderGet(token);
        successResponse(res, 'Orders Fetched Successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error fetching orders', error.status);
    }
}
const orderGetById = async (req, res) => {
    try {
        let id = req.params.id
        let result = await orderServices.orderGetById(id);
        successResponse(res, 'order fetched successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching order', error.status)
    }
}
const ordersGet = async (req, res) => {
    try {
        let data = req.params.page
        let token = req.user
        let result = await orderServices.ordersGet(data, token);
        successResponse(res, 'order fetched successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching order', error.status)
    }
}

module.exports = { ordersGet, orderGetById, orderGet }