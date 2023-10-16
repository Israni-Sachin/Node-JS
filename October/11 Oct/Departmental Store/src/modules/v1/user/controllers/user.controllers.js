const userServices = require('../services/user.services')
const { successResponse, errorResponse } = require('../../../../helper/http_response')

const userGetById = async (req, res) => {
    try {
        let data = req.params.id
        let result = await userServices.userGetById(data);
        successResponse(res, 'User fetched successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching user', error.status);
    }
}
const userAll = async (req, res) => {
    try {
        let result = await userServices.userAll();
        successResponse(res, 'Users fetched successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching user', error.status);
    }
}
const userAdd = async (req, res) => {
    try {
        let body = req.body;
        let data = await userServices.userAdd(body);
        successResponse(res, 'User added successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding user', error.status);
    }
}
const userUpdate = async (req, res) => {
    try {
        let userId = req.params.id
        let data = req.body;
        let result = await userServices.userUpdate(userId, data);
        successResponse(res, 'User updated successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating user', error.status);
    }
}
const userDelete = async (req, res) => {
    try {
        let data = req.params.id;
        let result = await userServices.userDelete(data);
        successResponse(res, 'User deleted successfully', data);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while deleting user', error.status);
    }
}

module.exports = { userAll, userGetById, userUpdate, userDelete, userAdd }