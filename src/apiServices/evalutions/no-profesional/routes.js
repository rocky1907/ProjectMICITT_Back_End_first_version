const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();


router.get('/no-profesional/competencies/technician/actions',controller.getNPTechnicianSkillActions);

router.get('/no-profesional/competencies/operative/actions',controller.getNPOperativeSkillActions);

module.exports = router;