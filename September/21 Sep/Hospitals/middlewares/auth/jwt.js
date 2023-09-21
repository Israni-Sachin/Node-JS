let jwt = require('jsonwebtoken');
const secret = "Sachinisrani@5656"

function generateToken(data) {
    let username = data.username
    delete data.username;
    let mainToken = jwt.sign(data, secret, { expiresIn: '1d' })
    return data.id, data.role, username, mainToken;
}

function verifyToken(req, res, next) {
    try {
        if (!req.headers.auth) throw new Error("auth header not found")
        let token = req.headers.auth
        let data = jwt.verify(token, secret);

        req.user = data
        next();
    } catch (error) {
        if (error.name == 'JsonWebTokenError') res.status(401).json({ status: 401, message: error.message });
        else if (error.name == 'TokenExpiryError') res.status(401).json({ status: 401, message: error.message })
        else if (error.name == 'Error') res.status(401).json({ status: 401, message: error.message });
        else res.status(500).json({ status: 500, message: "internal Server Error" });
    }
}

module.exports = {
    generateToken,
    verifyToken
}