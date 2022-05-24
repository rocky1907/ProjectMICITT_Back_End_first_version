const {pool} = require('../src/PostgresConecction/PgConecction');
const {response}= require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const loginUsuario = async(req,res=response)=>{
    let {user_name,password}= req.body;
    try {
        
        let dbUser = await pool.query('SELECT * FROM public."User" where user_name=$1;',[user_name]);
        //console.log(dbUser.rows[0].password);

        //Valida usuario
        if(dbUser.rowCount==0){
            return res.status(400).json({
                ok:false,
                msg:'El usuario no existe'
            });
        }

        //Valida contraseña
        let validPassword = bcrypt.compareSync(password,dbUser.rows[0].password);
        
        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg:'La contraseña no es valida'
            });
        }


        let token = await generarJWT(dbUser.rows[0].pk_id_num, dbUser.rows[0].user_name);



        //Respuesta del servicio 

        return res.json({
            ok:true,
            uid:dbUser.rows[0].pk_id_num,
            name: dbUser.rows[0].user_name,
            token
        });

    }catch(error){
        console.log(error);

        return res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        })
    }
}

const validarToken = async(req,res=response)=>{

    let {user_name}= req;
    
    //Leer bd para obtener email

    const dbUser =await pool.query('SELECT * FROM public."User" where user_name=$1;',[user_name]);



    const token = await generarJWT(dbUser.rows[0].pk_id_num, dbUser.rows[0].user_name);
    return res.json({
        ok:true,
        uid:dbUser.rows[0].pk_id_num,
        name: dbUser.rows[0].user_name,
        token
    });

}


module.exports = {
    loginUsuario,
    validarToken
} 