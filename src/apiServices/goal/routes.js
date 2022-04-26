const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();


router.get('/goal', controller.getGoal);
router.post('/goal', controller.createGoal);
router.put('/goalUpd/:id',controller.updateGoal);
router.delete('/goalAgree/:id',controller.deleteGoalByIdAgree);
router.get('/goalAgree/:id', controller.getGoalsById);
router.delete('/goal/:id',controller.deleteGoalByPkId);

module.exports = router;