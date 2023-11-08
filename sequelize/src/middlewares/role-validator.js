
const roleValidator = (role) => {

    return (req, res, next) => {
        if (role.includes(req.user.role)) {
            next();
        } else {
            res.status(401).json({
                status: '401', message: ' Unauthorized'
            })
        }
    }
}
module.exports = roleValidator;