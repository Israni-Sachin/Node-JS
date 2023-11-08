const Users = require('../../../../models/user.model')

const userGet = async (user) => {

    let data = await Users.findOne({ id: user.id })
    data.user_pass = undefined;
    return data;
}

const userUpdate = async (body, user) => {

    await Users.update(body,{ id: user.id });

}

module.exports = { userUpdate, userGet }