const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');

const getUsers = async (req,res)=>{
    const response = await pool.query('	select * from public."User";');
    res.status(200).json(response.rows);
}

/*const createUser = async (req,res)=>{
    
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
};*/



/*const getUserById = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from public."User" where pk_id_user = $1',[id]);
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
    const response = await pool.query('update public."User" set password = $1 where user_name = $2',[password,id]);
    res.json('User Updated successfully: '+response.rows);
};*/

module.exports = {
    getUsers,
    /*createUser,
    getUserById,
    deleteUserById,
    updateUserById,*/

} 