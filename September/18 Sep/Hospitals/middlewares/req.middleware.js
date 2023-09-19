let users = require('../config/users');

function get(req, res, next) {
    // let method = req.method;
    // let url = req.url;
    // start = Date.now();
    // next();
    // end = Date.now() - start;
    // console.log(end);
    // let sc = res.statusCode;
    // console.log(method, url, end,sc);
    let body = req.body
    console.log(body);
    console.log(typeof body);
    console.log(users);
    let includes = (users.some(v => v.username == body.username)) && (users.some(v => v.password == body.password))
    console.log(includes);

    if (includes) {
        let data = users.find(v => v.username == body.username)
        req.data = data
        next();
    }
    else {
        res.end('401 Unauthorized')
    }
}

module.exports = get 
