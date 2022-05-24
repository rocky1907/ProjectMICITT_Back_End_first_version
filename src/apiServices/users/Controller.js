const {pool} = require('../../PostgresConecction/PgConecction');
const {response}= require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../../../helpers/jwt');

const getUsers = async (req,res)=>{
    const response = await pool.query('	select * from public."User";');
    res.status(200).json(response.rows);
}
const addUser = async (req, res)=>{
    
    let {user_id,user_name, password} = req.body;
    
        let user= await pool.query('SELECT * FROM public."User" where pk_id_num=$1;',[user_id]);
        console.log(password);
        //aux=JSON.parse(user.rowCount);
        
        if(user.rowCount==!0){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe',
            });
        }else{
            let salt = bcrypt.genSaltSync();
            password= bcrypt.hashSync(password,salt);
    
            let token = await generarJWT(user_id,user_name);
            let response = await pool.query('INSERT INTO public."User"(pk_id_num, user_name, password) VALUES ($1,$2,$3)',[user_id, user_name, password]);  
        
        return res.status(201).json({
            ok: true,
            uid: user_id,
            name:user_name,
            token
        });
    
    
        }
    
};

const getUserByUserName = async (req,res)=>{
    const user_name = req.params.user_name;
    const response = await pool.query('select * from public."User" where "user_name" = $1;', [user_name]);
    res.status(200).json(response.rows);
}

const changePasswordById = async(req, res)=>{
    const id = req.params.id;
    const {password} = req.body;
    const response = await pool.query('UPDATE public."User" set password = $1 where pk_id_num = $2',[password, id]);
    res.json('User Password Updated successfully: '+ response.rows);
    };

const changeUserNameById = async(req, res)=>{
    const id = req.params.id;
    const {user_name} = req.body;
    const response = await pool.query('UPDATE public."User" set user_name = $1 where pk_id_num = $2',[user_name, id]);
    res.json('User Name Updated successfully: '+ response.rows);
};    

const changePasswordName = async(req, res)=>{
    const user_name = req.params.user_name;
    const {password} = req.body;
    const response = await pool.query('UPDATE public."User" set password = $1 where user_name = $2',[password, user_name]);
    res.json('User Password Updated successfully: '+ response.rows);
  };

module.exports = {
    addUser,
    getUsers,
    changePasswordById,
    changePasswordName,
    getUserByUserName,
    changeUserNameById

} 
