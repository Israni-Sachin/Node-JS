const userServices = require('../services/user.services')

const userGetById = async (req, res) => {
    try {
        let data = req.params.id
        let result = await userServices.userGetById(data);
        res.status(200).json({ message: "User fetched successfully", data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error while getting user' });
    }
}
const userAll = async (req, res) => {
    try {
        let result = await userServices.userAll();
        res.status(200).json({ data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error while fetching user' });
    }
}
const userAdd = async (req, res) => {
    try {
        let body = req.body;
        let data = await userServices.userAdd(body);
        successResponse(res, 'User added successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding user', error.status)
    }
}
const userUpdate = async (req, res) => {
    try {
        let userId = req.params.userId
        let data = req.body;
        let result = await userServices.userUpdate(userId, data);
        res.status(200).json({ message: "User updated successfully", data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error while updating user' });
    }
}
const userDelete = async (req, res) => {
    try {
        let data = req.params.userId;
        let result = await userServices.userDelete(data);
        res.status(200).json({ message: "User deleted successfully", data_affected: result.affectedRows });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while deleting user" });
    }
}

module.exports = { userAll, userGetById, userUpdate, userDelete, userAdd }