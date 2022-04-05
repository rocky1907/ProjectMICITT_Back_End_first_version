const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');

const getGoal = async (req,res)=>{
    const response = await pool.query('	select * from public."Goal";');
    res.status(200).json(response.rows);
}
const createGoal = async (req,res)=>{
    const {pk_id_num, objective, indicator1, product, percentage, agreeddate, followdate, observations, id_agreement} = req.body;
    const response = await pool.query('INSERT INTO public."Goal"(pk_id_num, objective, indicator1, product, percentage, agreeddate, followdate, observations, id_agreement) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',[pk_id_num, objective, indicator1, product, percentage, agreeddate, followdate, observations, id_agreement]);
    
    res.json({
        message: 'Goal added Succesfully',
        body:{
            goal:{pk_id_num, objective, indicator1, product, percentage, agreeddate, followdate, observations, id_agreement}
        }
    })
};

const updateGoal = async(req,res)=>{
    const id = req.params.id;
    const {objective,indicator1,product,percentage,agreeddate,followdate,observations} = req.body;
    const response = await pool.query('UPDATE public."Goal" set objective = $1 , indicator1 = $2 , product = $3 , percentage = $4 , agreeddate = $5, followdate = $6, observations = $7 where id_agreement = $8',[objective,indicator1,product,percentage,agreeddate,followdate,observations, id]);
    res.json('Goal Updated successfully: '+response.rows);
  };
  
const deleteGoalByIdAgree = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from public."Goal" where id_agreement = $1',[id]);
    res.send('Goal deleted: '+ id);
};

const getGoalsById = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from public."Goal" where "id_agreement" = $1;', [id]);
    res.status(200).json(response.rows);
}
const deleteGoalByPkId = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from public."Goal" where pk_id_num = $1',[id]);
    res.send('Goal deleted: '+ id);
};

module.exports = {
    getGoal,
    createGoal,
    updateGoal,
    deleteGoalByIdAgree,
    getGoalsById,
    deleteGoalByPkId
}