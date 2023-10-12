let jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(data) {
    const mainData = { user_id: data.user_id, user_role: data.user_role}
    let mainToken = jwt.sign(mainData, process.env.secret, { expiresIn: '1d' })
    // console.log(mainToken);
    return mainToken;
}

function verifyToken(req, res, next) {
    try {
        if (!req.headers.auth) res.status(400).json("auth header not found")
        let token = req.headers.auth
        let data = jwt.verify(token, process.env.secret);
        req.user = data
        next();
    } catch (error) {
        if (error.name == 'JsonWebTokenError') res.status(401).json({ status: 401, message: error.message });
        else if (error.name == 'TokenExpiryError') res.status(401).json({ status: 401, message: error.message })
        else if (error.name == 'Error') res.status(401).json({ status: 401, message: error.message });
        res.status(500).json({ status: 500, message: "internal Server Error" });
    }
}

module.exports = {
    generateToken,
    verifyToken
}