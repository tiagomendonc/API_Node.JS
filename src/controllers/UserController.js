const database = require('../database/connection');

class UserController {
    novoUsuario(req, res) {
        const {username, pswd} = req.body;

        database.insert({username, pswd}).table("users").then(data => {
            res.json({message: "Usuário criado com sucesso!"});
        }).catch(error => {
            console.log(error);
            res.json(error);
        })
    }

    alteraUsername(req, res) {
        const id_user = req.params;
        const {username} = req.body;

        database.where({id_user:id_user}).update({username:username}).table("users").then(data => {
            res.json({message: "Username alterado com sucesso!"});
        }).catch(error => {
            console.log(error);
            res.json(error);
        })
    }

    alteraSenha(req, res) {
        const id_user = req.params;
        const {pswd} = req.body;

        database.where({id_user:id_user}).update({pswd:pswd}).table("users").then(data => {
            res.json({message: "Senha alterada com sucesso!"});
        }).catch(error => {
            console.log(error);
            res.json(error);
        })
    }

    listaInformacoesUsuario(req, res) {
        const id_user = req.params;

        database.select("*").table("users").where({id_user:id_user}).then(user => {
            res.json(user);
        }).catch(error => {
            console.log(error);
            res.json(error);
        })
    }

    removeUsuario(req, res) {
        const id_user = req.params;

        database.where({id_user:id_user}).del().table("users").then(data => {
            res.json({message: "Usuário removido com sucesso!"});
        }).catch(error => {
            console.log(error);
            res.json(error);
        })
    }
}

module.exports = new UserController();