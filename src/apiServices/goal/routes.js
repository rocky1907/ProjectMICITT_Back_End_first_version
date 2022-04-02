const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();


router.get('/goal', controller.getGoal);
router.post('/goal', controller.createGoal);
router.post('/agreeGoal', controller.addAgreement_goal);
router.get('/agreeGoal', controller.getAgreement_goal);

module.exports = router;