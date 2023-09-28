let users = require('../config/users');


function login(body) {
    let user = users.find(item => item.username == body.username && item.password == body.password);
    if (user == undefined) {
        return false
    }
    let data = { ...user };
    delete data.password;
    return data;
}

module.exports = { login };