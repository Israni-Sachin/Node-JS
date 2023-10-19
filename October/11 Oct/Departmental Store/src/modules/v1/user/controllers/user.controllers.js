const userServices = require('../services/user.services')
const { successResponse, errorResponse } = require('../../../../helper/http_response')

const userGetById = async (req, res) => {
    try {
        let data = req.params.id
        let result = await userServices.userGetById(data);
        successResponse(res, 'User fetched successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching user', error.status);
    }
}
const userProfile = async (req, res) => {
    try {
        let data = req.user.user_id;
        let result = await userServices.userProfile(data);
        successResponse(res, 'User fetched successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching user', error.status);
    }
}
const userAll = async (req, res) => {
    try {
        let result = await userServices.userAll();
        successResponse(res, 'Your profile fetched successfully', result);
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while fetching your profile', error.status);
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
        successResponse(res, 'User updated successfully');
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating user', error.status);
    }
}
const userProfileUpdate = async (req, res) => {
    try {
        let userId = req.user.user_id;
        let data = req.body;
        let result = await userServices.userProfileUpdate(userId, data);
        successResponse(res, 'Your profile updated successfully');
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while updating your profile', error.status);
    }
}
const userDelete = async (req, res) => {
    try {
        let data = req.params.id;
        let result = await userServices.userDelete(data);
        successResponse(res, 'User deleted successfully');
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while deleting user', error.status);
    }
}

module.exports = { userAll, userGetById, userUpdate, userDelete, userAdd, userProfile, userProfileUpdate }