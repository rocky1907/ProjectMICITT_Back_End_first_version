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
        item19_auto,
        item20_auto,
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
        item18_chief,
        item19_chief,
        item20_chief}=req.body;
    const response = await pool.query('INSERT INTO public.competencies_adp('
    +'fun_id, periodo, item1_auto, item2_auto, item3_auto, item4_auto, item5_auto, item6_auto, item7_auto, item8_auto, item9_auto, item10_auto, item11_auto, item12_auto, item13_auto, item14_auto, item15_auto, item16_auto, item17_auto, item18_auto,item19_auto,item20_auto, item1_chief, item2_chief, item3_chief, item4_chief, item5_chief, item6_chief, item7_chief, item8_chief, item9_chief, item10_chief, item11_chief, item12_chief, item13_chief, item14_chief, item15_chief, item16_chief, item17_chief, item18_chief, item19_chief, item20_chief)'
    +'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42);',
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
        item19_auto,
        item20_auto,
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
        item18_chief,
        item19_chief,
        item20_chief
    ]);

    res.json({
        message: 'Competencies added Succesfully'
    })
};

const addOrUpdate = async (req,res)=>{
    const { id_fun, periodname, totalindividualskills,percentageindividualskills,totalindividualskillsboss,percentageindividualskillsboss,item1_auto,
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
        item19_auto,
        item20_auto,
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
        item18_chief,
        item19_chief,
        item20_chief} = req.body;
    const response = await pool.query('select existEvaluationIndividualSkills($1,$2);',[id_fun,periodname]);
    var x = response.rows[0].existevaluationindividualskills;
    if(totalindividualskills==0 && percentageindividualskills==0){
        if(x===true){
            //insert Jefe
            const response = await Promise.all([
                await pool.query('INSERT INTO public.competencies_adp('
                +'fun_id, periodo, item1_chief, item2_chief, item3_chief, item4_chief, item5_chief, item6_chief, item7_chief, item8_chief, item9_chief, item10_chief, item11_chief, item12_chief, item13_chief, item14_chief, item15_chief, item16_chief, item17_chief, item18_chief,item19_chief,item20_chief)'
                +'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,$21,$22);',
                [id_fun,periodname,            
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
                    item18_chief,
                    item19_chief,
                    item20_chief
                ]),
                await pool.query('INSERT INTO public."evaluationIndividualSkills"(id_fun, periodname, totalindividualskillsboss, percentageindividualskillsboss) VALUES ($1, $2, $3, $4);',[id_fun,periodname,totalindividualskillsboss,percentageindividualskillsboss])
                
            ]);
            res.status(200).json(response.rows);

        }else{
            //update Jefe
            const response = await Promise.all([
            await pool.query('UPDATE public.competencies_adp set item1_chief = $1 , item2_chief = $2 , item3_chief = $3 , item4_chief = $4 , item5_chief = $5 , item6_chief = $6 , item7_chief = $7 , item8_chief = $8 , item9_chief = $9 , item10_chief = $10 , item11_chief = $11 , item12_chief = $12 , item13_chief = $13 , item14_chief = $14 , item15_chief = $15 , item16_chief = $16 , item17_chief = $17 , item18_chief = $18,item19_chief = $19,item20_chief = $20 where fun_id = $21',[item1_chief, item2_chief,
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
                item18_chief,
                item19_chief,
                item20_chief,id_fun]),

            await pool.query('UPDATE public."evaluationIndividualSkills" SET totalindividualskillsboss = $1, percentageindividualskillsboss= $2 WHERE id_fun=$3;',[totalindividualskillsboss,percentageindividualskillsboss,id_fun])
            
            ]);
            res.status(200).json(response.rows);
        }
    }else{
        if(x===true){
            //insert Funcionario
            
            const response = await Promise.all([
            await pool.query('INSERT INTO public.competencies_adp('
            +'fun_id, periodo, item1_auto, item2_auto, item3_auto, item4_auto, item5_auto, item6_auto, item7_auto, item8_auto, item9_auto, item10_auto, item11_auto, item12_auto, item13_auto, item14_auto, item15_auto, item16_auto, item17_auto, item18_auto,item19_auto,item20_auto)'
            +'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,$21,$22);',
            [id_fun,periodname,
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
                item19_auto,
                item20_auto
            ]),          
            await pool.query('INSERT INTO public."evaluationIndividualSkills"(id_fun, periodname, totalindividualskills, percentageindividualskills) VALUES ($1, $2, $3, $4);',[id_fun,periodname,totalindividualskills,percentageindividualskills])

            ]);

            res.status(200).json(response.rows);

        }else{
            //update Funcionario
            const response = await Promise.all([            
            await pool.query('UPDATE public.competencies_adp set item1_auto = $1 , item2_auto = $2 , item3_auto = $3 , item4_auto = $4 , item5_auto = $5 , item6_auto = $6 , item7_auto = $7 , item8_auto = $8 , item9_auto = $9 , item10_auto = $10 , item11_auto = $11 , item12_auto = $12 , item13_auto = $13 , item14_auto = $14 , item15_auto = $15 , item16_auto = $16 , item17_auto = $17 , item18_auto = $18, item19_auto = $19, item20_auto = $20 where fun_id = $21',[
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
                item19_auto,
                item20_auto,id_fun]),

            await pool.query('UPDATE public."evaluationIndividualSkills" SET totalindividualskills = $1, percentageindividualskills= $2 WHERE id_fun=$3;',[totalindividualskills,percentageindividualskills,id_fun])
           
            ]);
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

const getCompetenceADP =  async (req,res)=>{
    const id = req.params.id;
    const periodo=req.params.periodo;
    const response = await pool.query('select * from public.competencies_adp where "fun_id" = $1 and periodo = $2;', [id,periodo]);
    res.status(200).json(response.rows);
}
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

const getRubricEvaluationTelecom = async (req,res)=>{
    const response = await pool.query('SELECT * FROM public."rubric_evaluation_telecom";');
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

const updateEvaluation = async(req,res)=>{
    const id = req.params.id;
    const per = req.params.per;
    const {id_fun, periodo, status, statussign, evidence, observationsboss, observationseva, status80, status20, observationsstatus, interview} = req.body;
    const response = await pool.query('UPDATE public."Evaluation" set id_fun = $1 , periodo = $2 , status = $3 , statussign = $4 , evidence = $5, observationsboss = $6, observationseva = $7, status80 = $8 , status20 = $9 , observationsstatus = $10, interview = $11 where id_fun = $12 and periodo = $13',[id_fun, periodo, status, statussign, evidence, observationsboss, observationseva, status80, status20, observationsstatus, interview, id, per]);
    res.json('Evaluation Updated successfully: '+response.rows);
  };

  const getEvaluation= async (req,res)=>{
    const id = req.params.id;
    const per = req.params.per;
    const response = await pool.query('select * from public."Evaluation" where id_fun = $1 and periodo = $2;', [id, per]);
    res.status(200).json(response.rows);
}

const getActions = async (req,res)=>{
    const id = req.params.id;
    const per = req.params.per;
    const response = await pool.query('select * from public."Action" where id_fun = $1 and periodo = $2;', [id, per]);
    res.status(200).json(response.rows);
}

const addAction = async (req,res)=>{
    const {id_fun, periodo, aspects, actions, responsable, term} = req.body;
    const response = await pool.query('INSERT INTO public."Action"(id_fun, periodo, aspects, actions, responsable, term) VALUES ($1,$2,$3,$4,$5,$6)',[id_fun, periodo, aspects, actions, responsable, term]);
    
    res.json({
        message: 'Action added Succesfully',
        body:{
            Evaluation80Totals:{id_fun, periodo, aspects, actions, responsable, term}
        }
    })
};

const updateEvaStatus = async(req,res)=>{
    const id = req.params.id;
    const per = req.params.per;
    const {status} = req.body;
    const response = await pool.query('UPDATE public."Evaluation" set status = $1 where id_fun = $2 and periodo = $3',[status, id, per]);
    res.json('Status Evaluation Updated successfully: '+response.rows);
};

const updateStatusSign = async(req,res)=>{
    const id = req.params.id;
    const per = req.params.per;
    const {statussign} = req.body;
    const response = await pool.query('UPDATE public."Evaluation" set statussign = $1 where id_fun = $2 and periodo = $3',[statussign, id, per]);
    res.json('Status Evaluation Updated successfully: '+response.rows);
};

const getEvaAccord = async (req,res)=>{
    const response = await pool.query('select * from public."Evaluation" where status =\'Conformidad\';');
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
    getCompetenceADP,
    getTotals80,
    getTotals20,
    updateEvaluation,
    getEvaluation,
    getActions,
    addAction,
    updateEvaStatus,
    updateStatusSign,
    getEvaAccord,
    getRubricEvaluationTelecom

}


       