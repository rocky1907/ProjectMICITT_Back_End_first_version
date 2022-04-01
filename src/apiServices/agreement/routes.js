//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

//const {getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/users.controller');

router.get('/agreement',controller.getAgreement);
router.post('/agreement',controller.createAgreement);


module.exports = router;