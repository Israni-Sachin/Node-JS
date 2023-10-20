function tokenForAuthor(req, res, next) {
    let token = req.user
    if (token.user_role != 'author') {
        res.send({
            status: 401,
            message: 'Unauthorized'
        })
    }
    else {
        next();
    }
}

module.exports = tokenForAuthor;