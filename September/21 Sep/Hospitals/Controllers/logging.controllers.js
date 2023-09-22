let logging = require('../Services/logging.services');
let auth = require('../middlewares/auth/jwt')

function login(req, res) {

    if (!req.body) {
        return res.send({ status: 401, message: 'Body is empty' })
    }
    let user = logging.login(req.body)
    if (!user) {
        return res.send({ status: 401, message: 'Invalid username or password' })
    }
    let token = auth.generateToken(user)
    let username = req.body.username
    res.send({
        Status: 200,
        Message: " Login Success",
        data: { ...user, username, token }
    })

}




module.exports = login 
