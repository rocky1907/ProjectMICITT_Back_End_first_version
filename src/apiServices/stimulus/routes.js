//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

//const {getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/users.controller');

router.get('/stimulus',controller.getStimulus);
router.post('/stimulus',controller.createStimulus);
router.get('/users/:id',controller.getUserById);
router.delete('/users/:id',controller.deleteUserById);
router.put('/users/:id',controller.updateUserById);

module.exports = router;