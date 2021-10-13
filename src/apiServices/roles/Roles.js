const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');


const getRoles = async (req,res)=>{
    const response = await pool.query('	select * from public."Role";');
    res.status(200).json(response.rows);
}

 
const addRole = async (req,res)=>{
    const {pk_role_name}=req.body;
    const response = await pool.query('INSERT INTO public."Role"(pk_role_name) VALUES ($1)',[pk_role_name]);
    res.json({
        message: 'Role added Succesfully',
        body:{
            role:{pk_role_name}
        }
    })
};

const deleteRoleByName = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from public."Role" where pk_role_name = $1',[id]);
    res.send('Role deleted: '+ id);
};

module.exports = {
    getRoles,
    addRole,
    deleteRoleByName
}