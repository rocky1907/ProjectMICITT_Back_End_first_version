const { response } = require("express");
const jwt= require('jsonwebtoken');
require('dotenv').config()


const validarJWT=(req,res =response, next)=>{

    const token = req.header('x-token');


    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'error en el token'
        });
    }

    try{

        const {pk_id_num, user_name}=jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.pk_id_num=pk_id_num;
        req.user_name=user_name;

    }catch(error){
        return res.status(401).json({
            ok:false,
            msg:'Token no valido'
        })
    }



    next();
} 


module.exports ={
    validarJWT
}