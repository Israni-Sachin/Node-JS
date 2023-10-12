function tokenForManager(req, res, next) {
    let token = req.user
    if (token.user_role != 'manager') {
        res.send({
            status: 401,
            message: 'Unauthorized'
        })
    }
    else {
        next();
    }
}

module.exports = tokenForManager;