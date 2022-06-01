const { response, json } = require('express');
const {pool} = require('../../../PostgresConecction/PgConecction');

const getNPOperativeSkillActions = async (req,res)=>{
    const response = await pool.query('select * from public."non-professionalSkillOperative";');
    res.status(200).json(response.rows);
}

const getNPTechnicianSkillActions = async (req,res)=>{
    const response = await pool.query('select * from public."non-professionalSkillTecnic";');
    res.status(200).json(response.rows);
}

module.exports = {getNPOperativeSkillActions,
                  getNPTechnicianSkillActions}