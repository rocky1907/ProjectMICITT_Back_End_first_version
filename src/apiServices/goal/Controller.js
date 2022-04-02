const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');

const getGoal = async (req,res)=>{
    const response = await pool.query('	select * from public."Goal";');
    res.status(200).json(response.rows);
}
const createGoal = async (req,res)=>{
    const {pk_id_num, objective, indicator1, product, percentage, agreeddate, followdate, observations} = req.body;
    const response = await pool.query('INSERT INTO public."Goal"(pk_id_num, objective, indicator1, product, percentage, agreeddate, followdate, observations) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',[pk_id_num, objective, indicator1, product, percentage, agreeddate, followdate, observations]);
    
    res.json({
        message: 'Goal added Succesfully',
        body:{
            goal:{pk_id_num, objective, indicator1, product, percentage, agreeddate, followdate, observations}
        }
    })
};

const addAgreement_goal = async (req,res)=>{
    const {id_agreement } = req.body;
    req.body.goals.forEach(element => {addnew(element,id_agreement);
    });
}
const addnew = async(element,id_agreement)=>{
    console.log(element);
    console.log(id_agreement);
    setTimeout(() => {
         pool.query('INSERT INTO public."Agreement_goal"(id_agreement, id_goal) VALUES ($1,$2)',[id_agreement, element]);
    }, 1000);
}

const getAgreement_goal = async (req,res)=>{
    const response = await pool.query('	select * from public."Agreement_goal";');
    res.status(200).json(response.rows);
}


module.exports = {
    getGoal,
    createGoal,
    addAgreement_goal,
    getAgreement_goal
}