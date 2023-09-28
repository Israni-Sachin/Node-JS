function tokenForDoctor(req, res, next) {
    let token = req.user
    if (token.role != 'Doctor') {
        res.send({
            status: 401,
            message: 'Unauthorized'
        })
    }
    else {
        next();
    }
}

module.exports = tokenForDoctor