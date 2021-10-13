const { response } = require('express');
const {pool} = require('../../PostgresConecction/PgConecction');


const getUsers = async (req,res)=>{
    const response = await pool.query('	select * from public."User";');
    res.status(200).json(response.rows);
    
}

 /*
const addUserRole = async (req,res)=>{
    const {roles}=req.body;
    const response = await pool.query('INSERT INTO public."User"(roles) VALUES ($1)',[roles]);
    res.json({
        message: 'Role added Succesfully',
        body:{
            role:{roles}
        }
    })
};
/*
const deleteRoleByName = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('Update public."User" deletewhere pk_role_name = $1',[id]);
    res.send('Role deleted: '+ id);
};
*/
module.exports = {
    getUsers
    //addUserRole,
    //deleteRoleByName
}