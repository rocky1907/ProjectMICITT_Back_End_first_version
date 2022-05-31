const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();


router.get('/gerencia-administracion/competencies/profesional/actions',controller.getGerenciaProSkillActions);


module.exports = router;