const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();


router.get('/telecom-gerencial/competencies/actions',controller.getTelecomGerencialSkillActions);


module.exports = router;