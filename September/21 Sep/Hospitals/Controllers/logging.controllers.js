let logging = require('../Services/logging.services');
let auth= require('../middlewares/auth/jwt')

function login(req, res) {
    let user = logging.login(req.body)
    if(!user){
        res.send({ status: 401, message: 'Invalid username or password' })
    }
    else{
        let token = auth.generateToken(user)
        let username = req.body.username
        res.send({
            Status: 200,
            Message: " Login Success",
            data: { ...user, username, token }
        })
    }
}




module.exports = login 
