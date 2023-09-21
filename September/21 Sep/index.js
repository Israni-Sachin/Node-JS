let jwt = require('jsonwebtoken');
const secret = "Sachinisrani@5656"
console.log(jwt);
function setUser(user) {
    return jwt.sign({
        id: user.id,
        username: user.username
    }, secret);
}

function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser
}