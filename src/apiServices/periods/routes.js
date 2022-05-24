//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

router.get('/periods',controller.getPeriods);
router.get('/periods/:pk_period_name',controller.getPeriodByName);
router.post('/periods',controller.addPeriod);
router.post('/periods/notify',controller.sendMail);
router.put('/periods/init/:pk_period_name',controller.initPeriod);
router.put('/periods/conclud/:pk_period_name',controller.stopPeriod);
router.delete('/periods/delete/:pk_period_name',controller.deletePeriod);
module.exports = router;

