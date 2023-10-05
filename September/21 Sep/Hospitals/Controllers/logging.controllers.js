let logging = require('../Services/logging.services');
let auth = require('../middlewares/auth/jwt')

function login(req, res) {

    console.log(Object.entries(req.body).length, 'hi');
    if (Object.entries(req.body).length == 0) {
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
        Message: "Login Successfully",
        data: { ...user, username, token }
    })

}




module.exports = login 
