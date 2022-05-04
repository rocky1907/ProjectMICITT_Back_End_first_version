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

const updateAutoCompetenciesId = async(req,res)=>{
    const id = req.params.id;
    const {item1_auto,
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
        item18_auto} = req.body;
    const response = await pool.query('UPDATE public.competencies_adp set item1_auto = $1 , item2_auto = $2 , item3_auto = $3 , item4_auto = $4 , item5_auto = $5 , item6_auto = $6 , item7_auto = $7 , item8_auto = $8 , item9_auto = $9 , item10_auto = $10 , item11_auto = $11 , item12_auto = $12 , item13_auto = $13 , item14_auto = $14 , item15_auto = $15 , item16_auto = $16 , item17_auto = $17 , item18_auto = $18 where fun_id = $19',[item1_auto, item2_auto,
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
        item18_auto,id]);
    res.json('Auto Evaluation Competencies Updated successfully: '+response.rows);
  };

 const updateChiefCompetenciesId = async(req,res)=>{
    const id = req.params.id;
    const {item1_chief,
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
        item18_chief} = req.body;
    const response = await pool.query('UPDATE public.competencies_adp set item1_chief = $1 , item2_chief = $2 , item3_chief = $3 , item4_chief = $4 , item5_chief = $5 , item6_chief = $6 , item7_chief = $7 , item8_chief = $8 , item9_chief = $9 , item10_chief = $10 , item11_chief = $11 , item12_chief = $12 , item13_chief = $13 , item14_chief = $14 , item15_chief = $15 , item16_chief = $16 , item17_chief = $17 , item18_chief = $18 where fun_id = $19',[item1_chief, item2_chief,
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
        item18_chief,id]);
    res.json('Chief Evaluation Competencies Updated successfully: '+response.rows);
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
    addCompetencies,
    updateAutoCompetenciesId,
    updateChiefCompetenciesId
}

