const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');
function randomNum(){
    var val= Math. floor(1000 + Math. random() * 9000);
    return val;
}
const getUsers = async (req,res)=>{
    const response = await pool.query('	select * from public."User";');
    res.status(200).json(response.rows);
}
const getStimulus = async (req,res)=>{
    const response = await pool.query('	select * from public."Stimulus";');
    res.status(200).json(response.rows);
}
const createUser = async (req,res)=>{
    
    const {pk_user_name, password} = req.body;
    console.log(pk_user_name);
    const response = await pool.query('INSERT INTO public."User"(pk_user_name, password) VALUES ($1,$2)',[pk_user_name, password]);

    //console.log(req.body);
    //req.body son los datos que una peticion cliente envie
    res.json({
        message: 'User added Succesfully',
        body:{
            user:{pk_user_name, password}
           
        }
    })
};

const createStimulus = async (req,res)=>{
    var num = randomNum();
    const {description} = req.body;
    console.log(num);
    const response = await pool.query('INSERT INTO public."Stimulus"(pk_id_stimulus, description) VALUES ($1,$2)',[num, description]);
    //console.log(req.body);
    //req.body son los datos que una peticion cliente envie
    res.json({
        message: 'Stimulus added Succesfully',
        body:{
            user:{num, description}
        }
    })
};

const getUserById = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from public."User" where pk_user_name = $1',[id]);
    res.json(response.rows);
};

const deleteUserById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from public."User" where pk_user_name = $1',[id]);
    res.send('User deleted: '+ id);
};

const updateUserById = async(req,res)=>{
    const id = req.params.id;
    const {password} = req.body;
    const response = await pool.query('update public."User" set password = $1 where pk_user_name = $2',[password,id]);
    res.json('User Updated successfully: '+response.rows);
};
const updateUserByName = async(req,res)=>{

};
module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUserById,
    createStimulus,
    getStimulus
} 
