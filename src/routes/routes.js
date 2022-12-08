const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const UserController = require('../controllers/UserController');
const AuthenticationController = require('../controllers/AuthenticationController');
const AuthorizationController = require('../controllers/AuthorizationController');

router.post('/login', AuthenticationController.login);


router.post('/novaTarefa', AuthorizationController.verifyJWT, TaskController.novaTarefa);

router.get('/tarefas', AuthorizationController.verifyJWT, TaskController.listarTarefas);

router.get('/tarefa/:id', AuthorizationController.verifyJWT, TaskController.listarUmaTarefa);

router.put('/atualizar/tarefa/:id', AuthorizationController.verifyJWT, TaskController.atualizarTarefa);

router.delete('/delete/tarefa/:id', AuthorizationController.verifyJWT, TaskController.removerTarefa);



router.post('/createuser', UserController.novoUsuario);

router.get('/user/:id_user', AuthorizationController.verifyJWT,UserController.listaInformacoesUsuario);

router.put('/atualizar/user/pswd/:id_user', AuthorizationController.verifyJWT, UserController.alteraSenha);

router.put('/atualizar/user/username/:id_user', AuthorizationController.verifyJWT, UserController.alteraUsername);

router.delete('/delete/user/:id_user', AuthorizationController.verifyJWT, UserController.removeUsuario);

module.exports = router;