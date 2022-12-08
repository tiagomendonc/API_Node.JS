const database = require('../database/connection');
const jwt = require('jsonwebtoken');

class AuthenticationController {
    login(req, res, next) {
        const {username, pswd} = req.body;

        if(database.select("*").table("users").where({username:username, pswd:pswd})){
            const {id_user} = req.params;
            const token = jwt.sign({id_user}, process.env.SECRET, {
                expiresIn: 300
            });
            return res.json({auth: true, token: token});
        } 

        res.status(500).json({message: 'Login inválido!'});
    }
}

module.exports = new AuthenticationController();