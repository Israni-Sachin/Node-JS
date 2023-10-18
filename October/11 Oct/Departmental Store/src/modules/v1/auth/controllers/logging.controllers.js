let logging = require('../services/logging.services');
let auth = require('../../../../middlewares/auth/jwt')
const { successResponse, errorResponse } = require('../../../../helper/http_response')

const login = async (req, res) => {
    try {

        if (Object.entries(req.body).length == 0) {
            return res.send({ status: 401, message: 'Body is empty' })
        }
        let user = await logging.login(req.body)
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

module.exports = login 