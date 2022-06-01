const { response, json } = require('express');
const {pool} = require('../../../PostgresConecction/PgConecction');

const getIAABossSkillActions = async (req,res)=>{
    const response = await pool.query('select * from public."BossSkill_2";');
    res.status(200).json(response.rows);
}

const getIAAProSkillActions = async (req,res)=>{
    const response = await pool.query('select * from public."professionalSkill";');
    res.status(200).json(response.rows);
}

module.exports = {getIAABossSkillActions,
                  getIAAProSkillActions}