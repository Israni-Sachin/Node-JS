
function decodinga(req, res, next) {
    // let data = atob(req.headers)
    // let data = atob(req.header);
    // let data2 = atob(req.getHeader('auth-2'));
    let data3 = atob(req.get('auth2'));
    // console.log(data2);
    console.log('in logging');
    console.log(data3);
    console.log('in logging');
    // console.log(data3.auth2);
    // console.log(data);
    // res.send(data)
    // console.log(JSON.parse(data));
    // console.log(JSON.stringify(data));
    // req.setHeader('auth',data.username);
    // req.setHeader('auth2',data.role);
    // console.log(res.headers);
    // console.log(data.role);
    if(data3=='doctors'){
        next();
    }
}

function tokenForDoctor(req, res, next) {
    // let token = req.headers.auth
    if(!req.headers.auth) res.send({ status: 404, message:"auth header not found"})
    // let as = atob(token)
    let token = JSON.parse(atob(req.headers.auth))
    if (token.role == 'Doctor') {
        next();
    }
    else {
        res.send({
            status: 401,
            message: 'Unautorized'
        })
    }
}

module.exports = tokenForDoctor