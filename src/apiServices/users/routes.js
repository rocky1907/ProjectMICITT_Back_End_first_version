//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('../users/Controller');
const router = express.Router();


router.post('/user', controller.addUser);
router.get('/user', controller.getUsers);
router.put('/user/:id', controller.changePassword);
router.put('/user/:user_name', controller.changePasswordName);
router.get('/user/:user_name', controller.getUserByUserName);


module.exports = router;