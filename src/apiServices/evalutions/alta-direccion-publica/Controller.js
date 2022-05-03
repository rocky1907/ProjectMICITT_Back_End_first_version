const { response, json } = require('express');
const {pool} = require('../../../PostgresConecction/PgConecction');


const addCompetencies = async (req,res)=>{
    const{fun_id,periodo,
        item1_auto,
        item2_auto,
        item3_auto,
        item4_auto,
        item5_auto,
        item6_auto,
        item7_auto,
        item8_auto,
        item9_auto,
        item10_auto,
        item11_auto,
        item12_auto,
        item13_auto,
        item14_auto,
        item15_auto,
        item16_auto,
        item17_auto,
        item18_auto,
        item1_chief,
        item2_chief,
        item3_chief,
        item4_chief,
        item5_chief,
        item6_chief,
        item7_chief,
        item8_chief,
        item9_chief,
        item10_chief,
        item11_chief,
        item12_chief,
        item13_chief,
        item14_chief,
        item15_chief,
        item16_chief,
        item17_chief,
        item18_chief}=req.body;
    const response = await pool.query('INSERT INTO public.competencies_adp('
    +'fun_id, periodo, item1_auto, item2_auto, item3_auto, item4_auto, item5_auto, item6_auto, item7_auto, item8_auto, item9_auto, item10_auto, item11_auto, item12_auto, item13_auto, item14_auto, item15_auto, item16_auto, item17_auto, item18_auto, item1_chief, item2_chief, item3_chief, item4_chief, item5_chief, item6_chief, item7_chief, item8_chief, item9_chief, item10_chief, item11_chief, item12_chief, item13_chief, item14_chief, item15_chief, item16_chief, item17_chief, item18_chief)'
    +'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38);',
    [fun_id,periodo,
        item1_auto,
        item2_auto,
        item3_auto,
        item4_auto,
        item5_auto,
        item6_auto,
        item7_auto,
        item8_auto,
        item9_auto,
        item10_auto,
        item11_auto,
        item12_auto,
        item13_auto,
        item14_auto,
        item15_auto,
        item16_auto,
        item17_auto,
        item18_auto,
        item1_chief,
        item2_chief,
        item3_chief,
        item4_chief,
        item5_chief,
        item6_chief,
        item7_chief,
        item8_chief,
        item9_chief,
        item10_chief,
        item11_chief,
        item12_chief,
        item13_chief,
        item14_chief,
        item15_chief,
        item16_chief,
        item17_chief,
        item18_chief
    ]);

    res.json({
        message: 'Competencies added Succesfully'
    })
};

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


module.exports = {
    getDescriptions,
    getProfessionalSkills,
    getRubricEvaluation,
    getBossSkill,
    getBossSkillActions,
    addCompetencies
}