const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();


router.get('/investigacion-analisis-asesoramiento/competencies/boss/actions',controller.getIAABossSkillActions);

router.get('/investigacion-analisis-asesoramiento/competencies/profesional/actions',controller.getIAAProSkillActions);

module.exports = router;