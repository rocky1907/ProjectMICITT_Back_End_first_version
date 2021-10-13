//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();
router.get('/role', controller.getRoles);
router.post('/role', controller.addRoles_user);
module.exports = router;