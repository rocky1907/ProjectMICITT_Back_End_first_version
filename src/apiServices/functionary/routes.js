//const {Router} = require('express');
//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

//const {getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/users.controller');
router.get('/functionary',controller.getFunctionary);
router.post('/functionary',controller.addFunctionary);
router.put('/functionary/:id',controller.updateFunById);

module.exports = router;