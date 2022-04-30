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

const getRoleBoss = async (req,res)=>{
    const response = await pool.query('select * from public."roles_user" where role_name = \'Jefe Superior\';');
    res.status(200).json(response.rows);
}

const deleteRoleFun = async(req,res)=>{
    const user = req.params.id;
    const name = req.params.role_name;
    const response = await pool.query('delete from public."roles_user" where id_user = $1 and role_name = $2',[user, name]);
    res.status(200).json(response.rows);
};

const getRoleFunId = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from public."roles_user" where id_user = $1',[id]);
    res.status(200).json(response.rows);
};

module.exports = {
    getRoles,
    addRoles_user,
    deleteRoleByName,
    addRole,
    getRoleBoss,
    getRoleFunId,
    deleteRoleFun
}