const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();


router.get('/prestacion-servicios/competencies/profesional/actions',controller.getPSProSkillActions);


module.exports = router;