const { response } = require('express');
const {pool} = require('../../PostgresConecction/PgConecction');


const addUser = async (req, res)=>{

    const {user_id,user_name, password} = req.body;
    const response = await pool.query('INSERT INTO public."User"(pk_id_num, user_name, password) VALUES ($1,$2,$3)',[user_id, user_name, password]);
  
    res.json({
        message: 'Usuario creado correctamente',
        body:{
            user:{user_id, user_name, password}
        }
    })
};


/*
se ocupa despues
const getUsers = async (req,res)=>{
    const response = await pool.query('	select * from public."User";');
    res.status(200).json(response.rows);
}
const getUserById = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from public."User" where pk_id_user = $1',[id]);
    res.json(response.rows);
};

const deleteUserById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from public."User" where pk_id_user = $1',[id]);
    res.send('User deleted: '+ id);
};

const updateUserById = async(req,res)=>{
    const id = req.params.id;
    const {password} = req.body;
    const response = await pool.query('update public."User" set password = $1 where pk_id_user = $2',[password,id]);
    res.json('User Updated successfully: '+ response.rows);
};
*/
//module.exports = {
//    getUsers,
//    createUser,
//    getUserById,
//    deleteUserById,
//    updateUserById
//}

module.exports = {
    addUser
}