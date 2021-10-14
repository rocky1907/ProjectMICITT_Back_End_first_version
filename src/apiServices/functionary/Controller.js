const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const {pool} = require('../../PostgresConecction/PgConecction');

function randomNum(){
  var val= Math. floor(1000 + Math. random() * 9000);
  return val;
}

const getFunctionary = async (req,res)=>{
    const response = await pool.query('	select * from public."Functionary";');
    res.status(200).json(response.rows);
}

const updateFunById = async(req,res)=>{
  const id = req.params.id;
  const {vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status} = req.body;
  const response = await pool.query('UPDATE public."Functionary" set vice_ministry = $1 , deparment = $2 , position_number = $3 , name_fun = $4 , last_name = $5 , id_fun = $6 , organizational_unit = $7 , unit = $8 , job_class = $9 , specialty = $10 , subspecialty = $11 , own_specialty = $12 , post = $13 , residency = $14 , appointment_condition = $15 , occupational_stratum = $16 , family_group = $17 , mail = $18 , telephone = $19 , status = $20 where id_fun = $21',[vice_ministry,deparment,position_number,name_fun,last_name,id_fun,organizational_unit,unit,job_class,specialty,subspecialty,own_specialty,post,residency,appointment_condition,occupational_stratum,family_group,mail,telephone,status,id]);
  res.json('Functionary Updated successfully: '+response.rows);
};

const addFunctionary = async (req,res)=>{
  var num = randomNum();
  const { vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status} = req.body;
  console.log(num);
  const response = await pool.query('INSERT INTO public."Functionary"(pk_id_num,vice_ministry,deparment,position_number,name_fun,last_name,id_fun,organizational_unit,unit,job_class,specialty,subspecialty,own_specialty,post,residency,appointment_condition,occupational_stratum,family_group,mail,telephone,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)',[num,vice_ministry,deparment,position_number,name_fun,last_name,id_fun,organizational_unit,unit,job_class,specialty,subspecialty,own_specialty,post,residency,appointment_condition,occupational_stratum,family_group,mail,telephone,status]);
  //console.log(req.body);
  //req.body son los datos que una peticion cliente envie
  res.json({
      message: 'Functionary added Succesfully',
      body:{
          user:{num, vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status}
      }
  })
};
       
      
        

module.exports = {
  getFunctionary,
  addFunctionary,
  updateFunById
} 