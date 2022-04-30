//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

router.get('/role',controller.getRoles);
router.post('/role',controller.addRole);
router.delete('/role/:pk_role_name',controller.deleteRoleByName);
router.post('/roleuser', controller.addRoles_user);
router.get('/roleBoss', controller.getRoleBoss);
router.get('/roleuser/:id',controller.getRoleFunId);
router.delete('/roleuser/:id/:role_name',controller.deleteRoleFun);

module.exports = router;

