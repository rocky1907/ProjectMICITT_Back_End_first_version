const { response, json } = require('express');
const {pool} = require('../../../PostgresConecction/PgConecction');

const getDescriptions = async (req,res)=>{
    const response = await pool.query('select * from public."professionalSkills-description_3";');
    res.status(200).json(response.rows);
}
const getProfessionalSkills = async (req,res)=>{
    const response = await pool.query('select * from public."professionalSkills-weighted_3";');
    res.status(200).json(response.rows);
}
const getRubricEvaluation = async (req,res)=>{
    const response = await pool.query('select * from public."rubricEvaluation";');
    res.status(200).json(response.rows);
}
const getBossSkill = async (req,res)=>{
    const response = await pool.query('select * from public."professionalSkillsName_3";');
    res.status(200).json(response.rows);
}
const getBossSkillActions = async (req,res)=>{
    const response = await pool.query('select * from public."BossSkill_3";');
    res.status(200).json(response.rows);
}

const getEvaVal = async (req,res)=>{
    const status = "Validado";
    const response = await pool.query('	select * from public."Evaluation" where status = $1',[status]);
    res.status(200).json(response.rows);
}


const getEvaValFun = async (req,res)=>{
    const id = req.params.id;
    const status = "Validado";
    const response = await pool.query('	select * from public."Evaluation" where id_fun = $1 and status = $2',[id, status]);
    res.status(200).json(response.rows);
}


module.exports = {
    getDescriptions,
    getProfessionalSkills,
    getRubricEvaluation,
    getBossSkill,
    getBossSkillActions,
    getEvaVal,
    getEvaValFun
}