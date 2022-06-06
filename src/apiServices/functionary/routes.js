//const {Router} = require('express');
//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

//const {getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/users.controller');
router.get('/functionary',controller.getFunctionary);
router.post('/functionary',controller.addFunctionary);
router.post('/functionary/notify',controller.sendMail);
router.put('/functionary/:id',controller.updateFunById);
router.get('/functionary/stratums', controller.getOccupationalStratum);
router.get('/functionary/specialty', controller.getSpecialty);
router.get('/functionary/condition', controller.getAppointmentCondition);
router.get('/functionary/family', controller.getFamily);
router.get('/functionary/classTELECOM', controller.getClassTELECOM);
router.get('/functionary/classCIT', controller.getClassCIT);
router.get('/functionary/unitCIT', controller.getUnitCIT);
router.get('/functionary/unitTELECOM', controller.getUnitTELECOM);
router.get('/functionary/post', controller.getPost);
router.get('/functionary/departmentCIT', controller.getDepartmentCIT);
router.get('/functionary/departmentTELECOM', controller.getDepartmentTELECOM);
router.get('/functionary/:id_fun', controller.getPkIDByIdFun);
router.get('/functionary/boss/:id', controller.getFunctionaryByPkID);
router.get('/functionary/idFun/:id_fun', controller.getFunctionaryByID);
router.get('/functionary/idBoss/:id', controller.getFunctionaryByIdBoss);
router.get('/functionary-evaluations', controller.getFunctionary_evaluations);
router.get('/functionary-by-family', controller.getFunctionary_Inevaluations_family);
router.get('/functionary-by-stratun', controller.getFunctionary_Inevaluations_stratum);
router.get('/functionary-by-reports-by-family', controller.reports_by_family);


module.exports = router;