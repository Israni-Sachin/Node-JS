const users = require('../../../models/test.model');

const userGet = async () => {
    const result = await users.find({});
    return result;
}
const userAdd = async (body) => {
    const result = await users.create(body);
    return result;
}

module.exports = { userGet, userAdd }