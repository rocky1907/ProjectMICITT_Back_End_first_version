//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

<<<<<<<< HEAD:src/apiServices/functionary/routes.js
//const {getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/users.controller');

router.get('/functionary',controller.getFunctionary);
router.post('/functionary',controller.addFunctionary);
========
/*router.post('/users',controller.createUser);
router.put('/users/:id',controller.updateUserById);*/
>>>>>>>> ClaseFuncionario:src/apiServices/users/routes.js

router.get('/user',userController.getUsers);
/*router.post('/users',userController.addUserRole);
//router.delete('/user/:id',userController.deleteRoleByName);
*/
//gg
module.exports = router;