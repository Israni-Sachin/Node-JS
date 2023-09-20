let users = require('../config/users');

function login(body) {
    let user = users.find(item => item.username == body.username && item.password == body.password);
    let data = { ...user };
    delete data.password;
    return data;
}

function generateToken(data) {
    let username = data.username
    delete data.username;
    let mainToken = btoa(JSON.stringify(data));
    return data.id, data.role, username, mainToken;
}
module.exports = { login, generateToken };