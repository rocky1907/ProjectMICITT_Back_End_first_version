const { response, json } = require('express');
const {pool} = require('../../../PostgresConecction/PgConecction');

const getGerenciaProSkillActions = async (req,res)=>{
    const response = await pool.query('select * from public."professionalSkill";');
    res.status(200).json(response.rows);
}

module.exports = {getGerenciaProSkillActions}