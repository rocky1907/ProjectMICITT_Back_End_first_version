const express = require('@awaitjs/express');
const controller = require('./Controller');
const router = express.Router();


router.get('/telecom-pro/competencies/actions',controller.getTelecomProSkillActions);


module.exports = router;