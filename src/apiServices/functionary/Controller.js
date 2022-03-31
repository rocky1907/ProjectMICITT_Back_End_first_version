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
  const {vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status, boss} = req.body;
  const response = await pool.query('UPDATE public."Functionary" set vice_ministry = $1 , deparment = $2 , position_number = $3 , name_fun = $4 , last_name = $5 , id_fun = $6 , organizational_unit = $7 , job_class = $8 , specialty = $9 , subspecialty = $10 , own_specialty = $11 , post = $12 , residency = $13 , appointment_condition = $14 , occupational_stratum = $15 , family_group = $16 , mail = $17 , telephone = $18 , status = $19, boss = $20 where id_fun = $21',[vice_ministry,deparment,position_number,name_fun,last_name,id_fun,organizational_unit,job_class,specialty,subspecialty,own_specialty,post,residency,appointment_condition,occupational_stratum,family_group,mail,telephone,status, boss,id]);
  res.json('Functionary Updated successfully: '+response.rows);
};

const addFunctionary = async (req,res)=>{
 
  const { pk_id_num, vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status, boss} = req.body;
  const response = await pool.query('INSERT INTO public."Functionary"(pk_id_num,vice_ministry,deparment,position_number,name_fun,last_name,id_fun,organizational_unit,job_class,specialty,subspecialty,own_specialty,post,residency,appointment_condition,occupational_stratum,family_group,mail,telephone,status, boss) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)',[pk_id_num,vice_ministry,deparment,position_number,name_fun,last_name,id_fun,organizational_unit,job_class,specialty,subspecialty,own_specialty,post,residency,appointment_condition,occupational_stratum,family_group,mail,telephone,status, boss]);
  
  res.json({
      message: 'Functionary added Succesfully',
      body:{
          user:{pk_id_num, vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status, boss}
      }
  })
};


const getOccupationalStratum = async (req,res)=>{
  const response = await pool.query('	select * from public."occupational_stratum";');
  res.status(200).json(response.rows);
}

const getSpecialty = async (req,res)=>{
  const response = await pool.query('	select * from public."specialty";');
  res.status(200).json(response.rows);
}

const getAppointmentCondition = async (req,res)=>{
  const response = await pool.query('	select * from public."appointment_condition";');
  res.status(200).json(response.rows);
}

const getFamily = async (req,res)=>{
  const response = await pool.query('	select * from public."family";');
  res.status(200).json(response.rows);
}

const getClassCIT = async (req,res)=>{
  const response = await pool.query('	select * from public."job_class_CIT";');
  res.status(200).json(response.rows);
}

const getClassTELECOM = async (req,res)=>{
  const response = await pool.query('	select * from public."job_class_TELECOM";');
  res.status(200).json(response.rows);
}

const getUnitCIT = async (req,res)=>{
  const response = await pool.query('	select * from public."organizational_unit_CIT";');
  res.status(200).json(response.rows);
}

const getUnitTELECOM = async (req,res)=>{
  const response = await pool.query('	select * from public."organizational_unit_TELECOM";');
  res.status(200).json(response.rows);
}

const getPost = async (req,res)=>{
  const response = await pool.query('	select * from public."post";');
  res.status(200).json(response.rows);
}

const getDepartmentCIT = async (req,res)=>{
  const response = await pool.query('	select * from public."department_CIT";');
  res.status(200).json(response.rows);
}

const getDepartmentTELECOM = async (req,res)=>{
  const response = await pool.query('	select * from public."department_TELECOM";');
  res.status(200).json(response.rows);
}

const getPkIDByIdFun = async (req,res)=>{
  const id_fun = req.params.id_fun;
  const response = await pool.query('select "pk_id_num" from public."Functionary" where "id_fun" = $1;', [id_fun]);
  res.status(200).json(response.rows);
}

const getFunctionaryByPkID = async (req,res)=>{
  const pk_id_num = req.params.pk_id_num;
  const response = await pool.query('select * from public."Functionary" where "pk_id_num" = $1;', [pk_id_num]);
  res.status(200).json(response.rows);
}

module.exports = {
  getFunctionary,
  addFunctionary,
  updateFunById,
  getOccupationalStratum,
  getSpecialty,
  getAppointmentCondition,
  getFamily,
  getClassCIT,
  getClassTELECOM,
  getUnitCIT,
  getUnitTELECOM,
  getPost,
  getDepartmentCIT,
  getDepartmentTELECOM,
  getPkIDByIdFun,
  getFunctionaryByPkID
} 