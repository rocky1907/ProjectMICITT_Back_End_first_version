const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

router.get('/alta-direccion-publica',controller.getDescriptions);
router.get('/alta-direccion-publica/weighted',controller.getProfessionalSkills);
router.get('/alta-direccion-publica/competencies/rubric',controller.getRubricEvaluation);
router.get('/alta-direccion-publica/competencies/rubricTelecom',controller.getRubricEvaluationTelecom);
router.get('/alta-direccion-publica/competencies/bosskill',controller.getBossSkill);
router.get('/alta-direccion-publica/competencies/bosskill/actions',controller.getBossSkillActions);
router.get('/evaluationsVali/',controller.getEvaVal);
router.get('/evaluationsValiFun/:id',controller.getEvaValFun);
router.put('/alta-direccion-publica/competencies/functionary/:id',controller.updateAutoCompetenciesId);
router.put('/alta-direccion-publica/competencies/chief/:id',controller.updateChiefCompetenciesId);
router.get('/evaluations',controller.getPendingEv);
router.put('/evaluations/:id/:per',controller.updateEvaluation);
router.get('/evaluations/:pk_id_num',controller.getPendingEvs);
router.post('/alta-direccion-publica/goals80', controller.addGoalsResults80);
router.get('/alta-direccion-publica/goals80', controller.getGoalsResults80);
router.get('/alta-direccion-publica/goals80/:id', controller.getGoalsEvaById);
router.put('/alta-direccion-publica/goalsEva80/:id', controller.updateGoalEvaluation);
router.delete('/alta-direccion-publica/goals80/:id', controller.deleteGoalEvaById);
router.post('/alta-direccion-publica/goalsTotal', controller.addEvaluation80Totals);
router.get('/alta-direccion-publica/goalsTotal', controller.getEvaTotals80);
router.get('/alta-direccion-publica/percentage80/:id/:per', controller.getTotals80);
router.get('/alta-direccion-publica/percentage20/:id/:per', controller.getTotals20);
router.post('/alta-direccion-publica/competencies',controller.addCompetencies);
router.get('/alta-direccion-publica/competencies/:id/:periodo',controller.getCompetenceADP );
router.post('/alta-direccion-publica/competencies/addorupdate',controller.addOrUpdate);

router.get('/evaluation/:id/:per',controller.getEvaluation);
router.get('/evaluation/action/:id/:per', controller.getActions);
router.post('/evaluation/action/', controller.addAction);
router.put('/evaStatus/:id/:per', controller.updateEvaStatus);
router.get('/allevaluations',controller.getAllEvaluation);
router.put('/statusSign/:id/:per', controller.updateStatusSign);
router.get('/evaluationsAccord/',controller.getEvaAccord);
router.get('/evaluationsDisagree/:id_fun',controller.getEvaDisagree);

router.put('/evaluationTotal80/:id/:per', controller.updateTotals80);
router.put('/evaluationTotal20/:id/:per', controller.updateTotals20);
router.post('/competenciesAppeals',controller.addCompetenciesAppeals);
router.get('/competenciesAppeals/:id/:per',controller.getCompetencesAppeals);


//router.post('/periods',controller.addPeriod);

module.exports = router;
