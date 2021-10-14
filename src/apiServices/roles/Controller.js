const { response } = require('express');
const {pool} = require('../../PostgresConecction/PgConecction');

const getRoles = async (req,res)=>{
    const response = await pool.query('	select * from public."Role";');
    res.status(200).json(response.rows);
}
const addRoles_user = async (req,res)=>{
    const {user_id} = req.body;
    req.body.roles.forEach(element => {
    addnew(element,user_id);
    });
}
const addnew = async(element,user_id)=>{
    
    setTimeout(() => {
         pool.query('INSERT INTO public."roles_user"(id_user, role_name) VALUES ($1,$2)',[user_id, element]);
    }, 1000);
}

module.exports = {
    getRoles,
    addRoles_user
}