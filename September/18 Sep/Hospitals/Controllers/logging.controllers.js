let logging = require('../Services/logging.services');

function login(req, res) {
    // let method = req.method;
    // let url = req.url;
    // start = Date.now();
    // next();
    // end = Date.now() - start;
    // console.log(end);
    // let sc = res.statusCode;
    // console.log(method, url, end,sc);

    // ---- 19 sep

    // let body = req.body
    // console.log(body);
    // console.log(typeof body);
    // console.log(users);
    // let includes = (users.some(v => v.username == body.username)) && (users.some(v => v.password == body.password))
    // console.log(includes);

    // if (includes) {
    //     let data = users.find(v => v.username == body.username)
    //     let encodedData = btoa(data.role);
    //     res.setHeader('auth', encodedData)
    //     req.header = encodedData
    //     req.headers['auth2'] = encodedData
    //     next();
    // }
    // else {
    //     res.end('401 Unauthorized')
    // }

    // ------ 20 Sep

    // let data = JSON.parse(req.headers.auth)
    // let data = req.body
    let user = logging.login(req.body)
    if(!user){
        res.send({ status: 401, message: 'Invalid username or password' })
    }
    else{
        let token = logging.generateToken(user)
        res.send({
            Status: 200,
            Message: " Login Success",
            data: { token }
        })
    }
    // console.log(user);
    // if (user) {
    //     let token = tokenMakker(user)
    //     res.send(token);
    // }
}




module.exports = login 
