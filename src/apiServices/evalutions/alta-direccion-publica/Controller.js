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

const addOrUpdate = async (req,res)=>{
    const { id_fun, periodname, totalindividualskills,percentageindividualskills,totalindividualskillsboss,percentageindividualskillsboss} = req.body;
    const response = await pool.query('select existEvaluationIndividualSkills($1,$2);',[id_fun,periodname]);
    var x = response.rows[0].existevaluationindividualskills;
    if(totalindividualskills==null && percentageindividualskills==null){
        if(x===true){
            //insert Jefe
            const response = await pool.query('INSERT INTO public."evaluationIndividualSkills"(id_fun, periodname, totalindividualskillsboss, percentageindividualskillsboss) VALUES ($1, $2, $3, $4);',[id_fun,periodname,totalindividualskillsboss,percentageindividualskillsboss]);
            res.status(200).json(response.rows);
        }else{
            //update Jefe
            const response = await pool.query('UPDATE public."evaluationIndividualSkills" SET totalindividualskillsboss = $1, percentageindividualskillsboss= $2 WHERE id_fun=$3;',[totalindividualskillsboss,percentageindividualskillsboss,id_fun]);
            res.status(200).json(response.rows);
        }
    }else{
        if(x===true){
            //insert Funcionario
            const response = await pool.query('INSERT INTO public."evaluationIndividualSkills"(id_fun, periodname, totalindividualskills, percentageindividualskills) VALUES ($1, $2, $3, $4);',[id_fun,periodname,totalindividualskills,percentageindividualskills]);
            res.status(200).json(response.rows);
        }else{
            //update Funcionario
            const response = await pool.query('UPDATE public."evaluationIndividualSkills" SET totalindividualskills = $1, percentageindividualskills= $2 WHERE id_fun=$3;',[totalindividualskills,percentageindividualskills,id_fun]);
            res.status(200).json(response.rows);
        }
    }
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

const getTotals80 = async (req,res)=>{
    const id = req.params.id;
    const per = req.params.per;
    const response = await pool.query('select * from public."Evaluation80Totals" where id_fun = $1 and periodo = $2;', [id, per]);
    res.status(200).json(response.rows);
}

const getTotals20 = async (req,res)=>{
    const id = req.params.id;
    const per = req.params.per;
    const response = await pool.query('select * from public."evaluationIndividualSkills" where id_fun = $1 and periodname = $2;', [id, per]);
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
    getEvaVal,
    getEvaValFun,
    addCompetencies,
    updateAutoCompetenciesId,
    updateChiefCompetenciesId,
    getPendingEv,
    getPendingEvs,
    addOrUpdate,
    getEvaTotals80,
    getTotals80,
    getTotals20

}