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

const getPendingEv = async (req,res)=>{
    const response = await pool.query('select * from public."Evaluation" where status =\'Pendiente\';');
    res.status(200).json(response.rows);
}

// const getMyEval = async (req,res)=>{
//     const id_fun = req.params.id_fun;
//     const response = await pool.query('select * from public."Evaluation" where status =\'Pendiente\' and id_fun = $1',[id_fun]);
//     res.status(200).json(response.rows);
// }

const getPendingEvs = async (req,res)=>{
    const pk_id_num = req.params.pk_id_num;
    var pkAux = parseInt(pk_id_num);
    console.log(pkAux);
    const response = await pool.query('select * from public.listarEvaluacionesPen($1);',[pkAux]);
    res.status(200).json(response.rows);
}



module.exports = {
    getDescriptions,
    getProfessionalSkills,
    getRubricEvaluation,
    getBossSkill,
    getBossSkillActions,
    getPendingEv,
   // getMyEval,
    getPendingEvs

}