function tokenForStaff(req, res, next) {
    let token = req.user
    if (token.user_role != 'staff') {
        res.send({
            status: 401,
            message: 'Unauthorized'
        })
    }
    else {
        next();
    }
}

module.exports = tokenForStaff;