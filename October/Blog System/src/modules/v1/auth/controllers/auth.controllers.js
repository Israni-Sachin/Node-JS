const authServices = require('../services/auth.services');
let auth = require('../../../../middlewares/auth/jwt')
const db = require('../../../../db/db.con');
const { successResponse, errorResponse } = require('../../../../helper/http_response');

const register = async (req, res) => {
    try {
        let data = req.body;
        if (Object.entries(data).length == 0) res.status(204).json("Body is empty");
        let result = await authServices.register(data);
        if (result == undefined) return res.status(400).json("Email is already registered")
        successResponse(res, "Registration Successfully completed");
    } catch (error) {
        console.log(error);
        errorResponse(res, { sysmsg: error.message, msg: "Error while registering" }, error.status);
    }
}

const login = async (req, res) => {
    try {

        if (Object.entries(req.body).length == 0) {
            return res.send({ status: 401, message: 'Body is empty' })
        }
        let user = await authServices.login(req.body)
        if (!user[0]) {
            return res.send({ status: 401, message: 'Invalid username or password' })
        }
        let token = auth.generateToken(user[0])
        let id = user[0].user_id;
        let role = user[0].user_role
        successResponse(res, "Login Successfully completed", { id, role, token });
    } catch (error) {
        console.log(error);
        errorResponse(res, { sysmsg: error.message, msg: "Error while logging" }, error.status);
    }

}

module.exports = { register, login }