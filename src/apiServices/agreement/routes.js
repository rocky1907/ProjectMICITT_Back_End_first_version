//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

//const {getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/users.controller');

router.get('/agreement',controller.getAgreement);
router.get('/agreement/:id_fun',controller.getAgreementByIdFun);
router.get('/agreementIdPer/:id_fun/:per',controller.getAgreementByIdFunPer);
router.post('/agreement',controller.createAgreement);
router.put('/agreementUpd/:id',controller.updateAgreement);
router.delete('/agreement/:id',controller.deleteAgreementById);
router.get('/agreement/:name',controller.getAgreementByNameBoss);

module.exports = router;