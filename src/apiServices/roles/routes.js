//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

router.get('/role',roleController.getRoles);
router.post('/role',roleController.addRole);
router.delete('/role/:pk_role_name',roleController.deleteRoleByName);
module.exports = router;