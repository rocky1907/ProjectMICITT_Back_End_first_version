const { response, json } = require('express');
const {pool} = require('../../../PostgresConecction/PgConecction');

const getTelecomProSkillActions = async (req,res)=>{
    const response = await pool.query('SELECT * FROM public."telecom_profesionalskills";');
    res.status(200).json(response.rows);
}



module.exports = {getTelecomProSkillActions}