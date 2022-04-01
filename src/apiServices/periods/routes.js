//const {Router} = require('express');
const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

router.get('/periods',controller.getPeriods);
router.post('/periods',controller.addPeriod);
router.get('/periods/:pk_period_name',controller.getPeriodByName);
module.exports = router;

