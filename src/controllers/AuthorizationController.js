const database = require('../database/connection');
const jwt = require('jsonwebtoken');

class AuthorizationController {
    verifyJWT(req, res, next) {
        const token = req.headers['x-access-token'];

        if(!token) {
            return res.status(401).json({auth: false, message: "No token provided."});
        }

        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if(err) {
                return res.status(500).json({auth:false, message: "Failed to autheticate token."});
            }
            req.id_user = decoded.id_user;
            next();
        });
    }
}

module.exports = new AuthorizationController();