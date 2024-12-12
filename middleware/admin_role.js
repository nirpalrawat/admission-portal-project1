const jwt = require('jsonwebtoken')


const authRoles = (roles) => {
    return (req, res, next) => {
        // console.log(req.user.role)
        if (!roles.includes(req.userdata.role)) { //role db bala  
            req.flash('error', 'Unauthorised user please login')
            res.redirect('/')
        }
        next();
    }

}
module.exports = authRoles