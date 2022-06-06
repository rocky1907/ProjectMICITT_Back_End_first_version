const { response, json } = require('express');
const {pool} = require('../../../PostgresConecction/PgConecction');

const getPSProSkillActions = async (req,res)=>{
    const response = await pool.query('select * from public."professionalSkill_2";');
    res.status(200).json(response.rows);
}



module.exports = {getPSProSkillActions}