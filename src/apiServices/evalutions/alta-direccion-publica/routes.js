const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

router.get('/alta-direccion-publica',controller.getDescriptions);
router.get('/alta-direccion-publica/weighted',controller.getProfessionalSkills);
router.get('/alta-direccion-publica/competencies/rubric',controller.getRubricEvaluation);
router.get('/alta-direccion-publica/competencies/bosskill',controller.getBossSkill);
router.get('/alta-direccion-publica/competencies/bosskill/actions',controller.getBossSkillActions);
router.post('/alta-direccion-publica/goals80', controller.addGoalsResults80);
router.get('/alta-direccion-publica/goals80', controller.getGoalsResults80);
router.get('/alta-direccion-publica/goals80/:id', controller.getGoalsEvaById);
router.put('/alta-direccion-publica/goalsEva80/:id', controller.updateGoalEvaluation);
router.delete('/alta-direccion-publica/goals80/:id', controller.deleteGoalEvaById);
router.post('/alta-direccion-publica/goalsTotal', controller.addEvaluation80Totals);
router.get('/alta-direccion-publica/goalsTotal', controller.getEvaTotals80);

//router.post('/periods',controller.addPeriod);
module.exports = router;