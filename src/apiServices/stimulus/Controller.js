const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');

function randomNum(){
    var val= Math. floor(1000 + Math. random() * 9000);
    return val;
} 

const getStimulus = async (req,res)=>{
    const response = await pool.query('	select * from public."Stimulus";');
    res.status(200).json(response.rows);
}
const createStimulus = async (req,res)=>{
    var num= randomNum();
    const {description} = req.body;
    console.log(num);
    const response = await pool.query('INSERT INTO public."Stimulus"(pk_id_stimulus, description) VALUES ($1,$2)',[num, description]);
    
    res.json({
        message: 'Stimulus added Succesfully',
        body:{
            stimulus:{num,description}
        }
    })
};

const getUserById = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from public."User" where pk_id_user = $1',[id]);
    res.json(response.rows);
};

const deleteStimById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from public."Stimulus" where pk_id_stimulus = $1',[id]);
    res.send('Stimulus deleted: '+ id);
};

const updateUserById = async(req,res)=>{
    const id = req.params.id;
    const {password} = req.body;
    const response = await pool.query('update public."User" set password = $1 where pk_id_user = $2',[password,id]);
    res.json('User Updated successfully: '+response.rows);
};
module.exports = {
    getStimulus,
    createStimulus,
    getUserById,
    deleteStimById,
    updateUserById
}