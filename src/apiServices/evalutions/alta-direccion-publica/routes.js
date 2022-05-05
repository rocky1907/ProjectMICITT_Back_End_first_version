const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();

router.get('/alta-direccion-publica',controller.getDescriptions);
router.get('/alta-direccion-publica/weighted',controller.getProfessionalSkills);
router.get('/alta-direccion-publica/competencies/rubric',controller.getRubricEvaluation);
router.get('/alta-direccion-publica/competencies/bosskill',controller.getBossSkill);
router.get('/alta-direccion-publica/competencies/bosskill/actions',controller.getBossSkillActions);
router.put('/alta-direccion-publica/competencies/functionary/:id',controller.updateAutoCompetenciesId);
router.put('/alta-direccion-publica/competencies/chief/:id',controller.updateChiefCompetenciesId);
router.get('/evaluations',controller.getPendingEv);
router.get('/evaluations/:pk_id_num',controller.getPendingEvs);
router.post('/alta-direccion-publica/competencies',controller.addCompetencies);
//router.post('/periods',controller.addPeriod);
module.exports = router;