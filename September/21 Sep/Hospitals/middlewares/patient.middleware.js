function tokenForPatient(req, res, next) {
    let token = req.user
    if (!token.role == 'Patient') {
        res.send({
            status: 401,
            message: 'Unautorized'
        })
    }
    else {
        next();
    }
}

module.exports = tokenForPatient