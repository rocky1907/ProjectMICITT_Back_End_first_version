const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');

const getAgreement = async (req,res)=>{
    const response = await pool.query('	select * from public."Agreement";');
    res.status(200).json(response.rows);
}
const getAgreementByIdFun = async (req,res)=>{
    const id_fun = req.params.id_fun;
    const response = await pool.query('	select * from public."Agreement" where id_fun =$1;', [id_fun]);
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

const updateAgreement = async(req,res)=>{
    const id = req.params.id;
    const {id_fun,name_fun,classs,department,post,adress,year_ev,name_boss,name_period,first_date,date_eva_first,final_date,date_eva_final,stim} = req.body;
    const response = await pool.query('UPDATE public."Agreement" set id_fun = $1 , name_fun = $2 , classs = $3 , department = $4 , post = $5, adress = $6, year_ev = $7 , name_boss = $8 , name_period = $9 , first_date = $10 , date_eva_first = $11 , final_date = $12 , date_eva_final = $13 , stim = $14 where pk_id_num = $15',[id_fun,name_fun,classs,department,post,adress,year_ev,name_boss,name_period,first_date,date_eva_first,final_date,date_eva_final,stim, id]);
    res.json('Agreement Updated successfully: '+response.rows);
  };

  const deleteAgreementById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from public."Agreement" where pk_id_num = $1',[id]);
    res.send('Agreement deleted: '+ id);
};

const getAgreementByNameBoss = async (req,res)=>{
    const name = req.params.name;
    const response = await pool.query('	select * from public."Agreement" where name_boss =$1;', [name]);
    res.status(200).json(response.rows);
}

module.exports = {
    getAgreement,
    createAgreement,
    updateAgreement,
    deleteAgreementById,
    getAgreementByIdFun,
    getAgreementByNameBoss
    
}