const userServices = require('../services/user.services');

const userGet = async (req, res) => {
    try {
        const result = await userServices.userGet();
        res.send(result);
    } catch (error) {
        console.log(error.message);
        console.log(error);
    }
}
const userAdd = async (req, res) => {
    try {
        const result = await userServices.userAdd(req.body);
        res.send(result);
    } catch (error) {
        console.log(error);
        console.log(error);
    }
}

module.exports = { userGet, userAdd }