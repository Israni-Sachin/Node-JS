function tokenForManager(req, res, next) {
    let token = req.user
    if (token.user_role == 'manager' || token.user_role == 'customer') {
        next();
    }
    else {
        res.send({
            status: 401,
            message: 'Unauthorized'
        })
    }
}

module.exports = tokenForManager;