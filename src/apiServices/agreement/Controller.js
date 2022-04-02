const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');

const getAgreement = async (req,res)=>{
    const response = await pool.query('	select * from public."Agreement";');
    res.status(200).json(response.rows);
}
const createAgreement = async (req,res)=>{
    const {pk_id_num, id_fun,name_fun,classs,department,post,adress,year_ev,name_boss,name_period,first_date,date_eva_first,final_date,date_eva_final,stim} = req.body;
    const response = await pool.query('INSERT INTO public."Agreement"(pk_id_num, id_fun,name_fun,classs,department,post,adress,year_ev,name_boss,name_period,first_date,date_eva_first,final_date,date_eva_final,stim) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)',[pk_id_num, id_fun,name_fun,classs,department,post,adress,year_ev,name_boss,name_period,first_date,date_eva_first,final_date,date_eva_final,stim]);
    
    res.json({
        message: 'Agreement added Succesfully',
        body:{
            agreement:{pk_id_num, id_fun,name_fun,classs,department,post,adress,year_ev,name_boss,name_period,first_date,date_eva_first,final_date,date_eva_final,stim}
        }
    })
};


module.exports = {
    getAgreement,
    createAgreement,
    
}