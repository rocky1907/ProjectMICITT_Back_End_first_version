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
    console.log(element);
    console.log(user_id);
    setTimeout(() => {
         pool.query('INSERT INTO public."roles_user"(id_user, role_name) VALUES ($1,$2)',[user_id, element]);
    }, 1000);
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
    const name = req.params.pk_role_name;
    const response = await pool.query('delete from public."Role" where pk_role_name = $1',[name]);
    res.send('Role deleted: '+ name);
};

module.exports = {
    getRoles,
    addRoles_user,
    deleteRoleByName,
    addRole
}