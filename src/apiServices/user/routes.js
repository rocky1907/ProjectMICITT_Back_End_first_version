//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

//const {getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/user.controller');

//router.get('/user',controller.getUsers);

router.post('/user', controller.addUser);

//router.get('/user/:id',controller.getUserById);
//router.delete('/user/:id',controller.deleteUserById);
//router.put('/user/:id',controller.updateUserById);

module.exports = router;