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

const addGoalsResults80 = async (req,res)=>{
    const {pk_id_num, id_fun, periodo, objective, indicator1, product, percentage, compliance, totalobtained, observations1} = req.body;
    const response = await pool.query('INSERT INTO public."goalsEvaluation80"(pk_id_num, id_fun, periodo, objective, indicator1, product, percentage, compliance, totalobtained, observations1) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',[pk_id_num, id_fun, periodo, objective, indicator1, product, percentage, compliance, totalobtained, observations1]);
    
    res.json({
        message: 'Result added Succesfully',
        body:{
            goalsEvaluation80:{pk_id_num, id_fun, periodo, objective, indicator1, product, percentage, compliance, totalobtained, observations1}
        }
    })
};

const updateGoalEvaluation = async(req,res)=>{
    const id = req.params.id;
    const {pk_id_num, id_fun, periodo, objective, indicator1, product, percentage, compliance, totalobtained, observations1} = req.body;
    const response = await pool.query('UPDATE public."goalsEvaluation80" set pk_id_num = $1 , id_fun = $2 , periodo = $3 , objective = $4 , indicator1 = $5, product = $6, percentage = $7, compliance  = $8 , totalobtained = $9, observations1 = $10 where pk_id_num = $11',[pk_id_num, id_fun, periodo, objective, indicator1, product, percentage, compliance, totalobtained, observations1, id]);
    res.json('GoalEvaluation Updated successfully: '+response.rows);
  };

const getGoalsResults80 = async (req,res)=>{
    const response = await pool.query('select * from public."goalsEvaluation80";');
    res.status(200).json(response.rows);
}

const getGoalsEvaById = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from public."goalsEvaluation80" where "pk_id_num" = $1;', [id]);
    res.status(200).json(response.rows);
}

const deleteGoalEvaById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from public."goalsEvaluation80" where pk_id_num = $1',[id]);
    res.send('GoalEvaluation deleted: '+ id);
};

const addEvaluation80Totals = async (req,res)=>{
    const {id_fun, periodo, totalsobtained, totalspercentage} = req.body;
    const response = await pool.query('INSERT INTO public."Evaluation80Totals"(id_fun, periodo, totalsobtained, totalspercentage) VALUES ($1,$2,$3,$4)',[id_fun, periodo, totalsobtained, totalspercentage]);
    
    res.json({
        message: 'Totals Evaluation added Succesfully',
        body:{
            Evaluation80Totals:{id_fun, periodo, totalsobtained, totalspercentage}
        }
    })
};

const getEvaTotals80 = async (req,res)=>{
    const response = await pool.query('select * from public."Evaluation80Totals";');
    res.status(200).json(response.rows);
}

module.exports = {
    getDescriptions,
    getProfessionalSkills,
    getRubricEvaluation,
    getBossSkill,
    getBossSkillActions,
    addGoalsResults80,
    getGoalsResults80,
    getGoalsEvaById,
    updateGoalEvaluation,
    deleteGoalEvaById,
    addEvaluation80Totals,
    getEvaTotals80
}