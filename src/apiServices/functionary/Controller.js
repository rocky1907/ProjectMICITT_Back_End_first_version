const { response } = require('express');
//const {pool} = require('../database.conecction/pg.conecction'); asi se importa una clase
const { pool } = require('../../PostgresConecction/PgConecction');
const nodeMailer = require('nodemailer');

const sendMail = (req, res) => {
    let body = req.body;
    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        auth: {
            //Credenciales del MICITT
            user: 'alemanrodrigo1907@gmail.com',
            pass: 'knnzsmmbkctaxgyq'
        }
    });

    for (var i = 0; i < body.length; i++) {
        config.sendMail(options = {
            from: 'SEDI',
            subject: body[i].asunto,
            to: body[i].email,
            text: body[i].mensaje,
            html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#0095da" bgcolor="#87CEEB">
            <tr height="200px">  
                <td bgcolor="" width="600px">
                    <h1 style="color: #fff; text-align:center">MICITT</h1>
                    <p  style="color: #fff; text-align:center">
                        <span style="color: #000000">${body[i].mensaje}</span> 
                    </p>
                </td>
            </tr>
            <tr bgcolor="#fff">
                <td style="text-align:center">
                    <p style="color: #000">Por favor, no responda este correo</p>
                </td>
            </tr>
            </table>
            `
        }, function (error, result) {
            if (error) return res.json({ ok: false, msj: error })
            return res.json({
                ok: true,
                msg: "Correos enviados con éxito"
            });
        })
    }
}

function randomNum() {
  var val = Math.floor(1000 + Math.random() * 9000);
  return val;
}

const getFunctionary = async (req, res) => {
  const response = await pool.query('	select * from public."Functionary";');
  res.status(200).json(response.rows);
}

const updateFunById = async (req, res) => {
  const id = req.params.id;
  const { vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status, boss,gender } = req.body;
  const response = await pool.query('UPDATE public."Functionary" set vice_ministry = $1 , deparment = $2 , position_number = $3 , name_fun = $4 , last_name = $5 , id_fun = $6 , organizational_unit = $7 , job_class = $8 , specialty = $9 , subspecialty = $10 , own_specialty = $11 , post = $12 , residency = $13 , appointment_condition = $14 , occupational_stratum = $15 , family_group = $16 , mail = $17 , telephone = $18 , status = $19, boss = $20, gender = $21 where id_fun = $22', [vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status, boss, gender, id]);
  res.json('Functionary Updated successfully: ' + response.rows);
};

const addFunctionary = async (req, res) => {

  const { pk_id_num, vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status, boss,gender} = req.body;
  const response = await pool.query('INSERT INTO public."Functionary"(pk_id_num,vice_ministry,deparment,position_number,name_fun,last_name,id_fun,organizational_unit,job_class,specialty,subspecialty,own_specialty,post,residency,appointment_condition,occupational_stratum,family_group,mail,telephone,status, boss,gender) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)', [pk_id_num, vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status, boss,gender]);

  res.json({
    message: 'Functionary added Succesfully',
    body: {
      user: { pk_id_num, vice_ministry, deparment, position_number, name_fun, last_name, id_fun, organizational_unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status, boss,gender }
    }
  })
};


const getOccupationalStratum = async (req, res) => {
  const response = await pool.query('	select * from public."occupational_stratum";');
  res.status(200).json(response.rows);
}

const getSpecialty = async (req, res) => {
  const response = await pool.query('	select * from public."specialty";');
  res.status(200).json(response.rows);
}

const getAppointmentCondition = async (req, res) => {
  const response = await pool.query('	select * from public."appointment_condition";');
  res.status(200).json(response.rows);
}

const getFamily = async (req, res) => {
  const response = await pool.query('	select * from public."family";');
  res.status(200).json(response.rows);
}

const getClassCIT = async (req, res) => {
  const response = await pool.query('	select * from public."job_class_CIT";');
  res.status(200).json(response.rows);
}

const getClassTELECOM = async (req, res) => {
  const response = await pool.query('	select * from public."job_class_TELECOM";');
  res.status(200).json(response.rows);
}

const getUnitCIT = async (req, res) => {
  const response = await pool.query('	select * from public."organizational_unit_CIT";');
  res.status(200).json(response.rows);
}

const getUnitTELECOM = async (req, res) => {
  const response = await pool.query('	select * from public."organizational_unit_TELECOM";');
  res.status(200).json(response.rows);
}

const getPost = async (req, res) => {
  const response = await pool.query('	select * from public."post";');
  res.status(200).json(response.rows);
}

const getDepartmentCIT = async (req, res) => {
  const response = await pool.query('	select * from public."department_CIT";');
  res.status(200).json(response.rows);
}

const getDepartmentTELECOM = async (req, res) => {
  const response = await pool.query('	select * from public."department_TELECOM";');
  res.status(200).json(response.rows);
}

const getPkIDByIdFun = async (req, res) => {
  const id_fun = req.params.id_fun;
  const response = await pool.query('select "pk_id_num" from public."Functionary" where "id_fun" = $1;', [id_fun]);
  res.status(200).json(response.rows);
}

const getFunctionaryByPkID = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('select * from public."Functionary" where "pk_id_num" = $1;', [id]);
  res.status(200).json(response.rows);
}
const getFunctionaryByID = async (req, res) => {
  const id_fun = req.params.id_fun;
  const response = await pool.query('select * from public."Functionary" where "id_fun" = $1;', [id_fun]);
  res.status(200).json(response.rows);
}
const getFunctionaryByIdBoss = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('select * from public."Functionary" where "boss" = $1;', [id]);
  res.status(200).json(response.rows);
}
const getFunctionary_evaluations = async (req, res) => {
  const response = await pool.query('select * from showFunctionary();');
  res.status(200).json(response.rows);
}

const getFunctionary_Inevaluations_family = async (req, res) => {
  try {
    //"Alta Dirección Pública";
    let alta=[];
    let sobresalienteM = await pool.query('SELECT COUNT(*) FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["M"]);
    let sobresalienteF = await pool.query('SELECT COUNT(*) FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["F"]);
    let ExelenteM = await pool.query('SELECT COUNT(*) '+
    'FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["M"]);
    let ExelenteF = await pool.query('SELECT COUNT(*) '+
    'FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["F"]);
    let muyBuenoM = await pool.query('SELECT COUNT(*) '+
    'FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["M"]);
    let muyBuenoF = await pool.query('SELECT COUNT(*) '+
    'FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["F"]);
    let BuenoM = await pool.query('SELECT COUNT(*) '+
    'FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["M"]);
    let BuenoF = await pool.query('SELECT COUNT(*) '+
    'FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["F"]);
    let insuM = await pool.query('SELECT COUNT(*) FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["M"]);
    let insuF = await pool.query('SELECT COUNT(*) FROM report_alta_direccion_publica where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["F"]);
    alta.push(sobresalienteM.rows);
    alta.push(sobresalienteF.rows);
    alta.push(ExelenteM.rows);
    alta.push(ExelenteF.rows);
    alta.push(muyBuenoM.rows);
    alta.push(muyBuenoF.rows);
    alta.push(BuenoM.rows);
    alta.push(BuenoF.rows);
    alta.push(insuM.rows);
    alta.push(insuF.rows);
    //"Investigación, Análisis y Asesoramiento de Políticas";
    let iaap = [];
    sobresalienteM = await pool.query('SELECT COUNT(*) FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["M"]);
    sobresalienteF = await pool.query('SELECT COUNT(*) FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["F"]);
    ExelenteM = await pool.query('SELECT COUNT(*) '+
    'FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["M"]);
    ExelenteF = await pool.query('SELECT COUNT(*) '+
    'FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["F"]);
    muyBuenoM = await pool.query('SELECT COUNT(*) '+
    'FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["M"]);
    muyBuenoF = await pool.query('SELECT COUNT(*) '+
    'FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["F"]);
    BuenoM = await pool.query('SELECT COUNT(*) '+
    'FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["M"]);
    BuenoF = await pool.query('SELECT COUNT(*) '+
    'FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["F"]);
    insuM = await pool.query('SELECT COUNT(*) FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["M"]);
    insuF = await pool.query('SELECT COUNT(*) FROM report_inv_ana_ase_de_politicas where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["F"]);
    iaap.push(sobresalienteM.rows);
    iaap.push(sobresalienteF.rows);
    iaap.push(ExelenteM.rows);
    iaap.push(ExelenteF.rows);
    iaap.push(muyBuenoM.rows);
    iaap.push(muyBuenoF.rows);
    iaap.push(BuenoM.rows);
    iaap.push(BuenoF.rows);
    iaap.push(insuM.rows);
    iaap.push(insuF.rows);
    //"Prestación de Servicios Públicos";
    let sp = [];
    sobresalienteM = await pool.query('SELECT COUNT(*) FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["M"]);
    sobresalienteF = await pool.query('SELECT COUNT(*) FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["F"]);
    ExelenteM = await pool.query('SELECT COUNT(*) '+
    'FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["M"]);
    ExelenteF = await pool.query('SELECT COUNT(*) '+
    'FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["F"]);
    muyBuenoM = await pool.query('SELECT COUNT(*) '+
    'FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["M"]);
    muyBuenoF = await pool.query('SELECT COUNT(*) '+
    'FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["F"]);
    BuenoM = await pool.query('SELECT COUNT(*) '+
    'FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["M"]);
    BuenoF = await pool.query('SELECT COUNT(*) '+
    'FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["F"]);
    insuM = await pool.query('SELECT COUNT(*) FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["M"]);
    insuF = await pool.query('SELECT COUNT(*) FROM report_prestacion_servicios where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["F"]);
    sp.push(sobresalienteM.rows);
    sp.push(sobresalienteF.rows);
    sp.push(ExelenteM.rows);
    sp.push(ExelenteF.rows);
    sp.push(muyBuenoM.rows);
    sp.push(muyBuenoF.rows);
    sp.push(BuenoM.rows);
    sp.push(BuenoF.rows);
    sp.push(insuM.rows);
    sp.push(insuF.rows);
    //"Gerencia y Administración";
    let ga = [];
    sobresalienteM = await pool.query('SELECT COUNT(*) FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["M"]);
    sobresalienteF = await pool.query('SELECT COUNT(*) FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["F"]);
    ExelenteM = await pool.query('SELECT COUNT(*) '+
    'FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["M"]);
    ExelenteF = await pool.query('SELECT COUNT(*) '+
    'FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["F"]);
    muyBuenoM = await pool.query('SELECT COUNT(*) '+
    'FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["M"]);
    muyBuenoF = await pool.query('SELECT COUNT(*) '+
    'FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["F"]);
    BuenoM = await pool.query('SELECT COUNT(*) '+
    'FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["M"]);
    BuenoF = await pool.query('SELECT COUNT(*) '+
    'FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
    '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["F"]);
    insuM = await pool.query('SELECT COUNT(*) FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["M"]);
    insuF = await pool.query('SELECT COUNT(*) FROM report_gerencia_administracion where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["F"]);
    ga.push(sobresalienteM.rows);
    ga.push(sobresalienteF.rows);
    ga.push(ExelenteM.rows);
    ga.push(ExelenteF.rows);
    ga.push(muyBuenoM.rows);
    ga.push(muyBuenoF.rows);
    ga.push(BuenoM.rows);
    ga.push(BuenoF.rows);
    ga.push(insuM.rows);
    ga.push(insuF.rows);
    //"No Profesionales";
    let notP = [];
   sobresalienteM = await pool.query('SELECT COUNT(*) FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["M"]);
   sobresalienteF = await pool.query('SELECT COUNT(*) FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) = 100 and gender = $1; ',["F"]);
   ExelenteM = await pool.query('SELECT COUNT(*) '+
   'FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
   '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["M"]);
   ExelenteF = await pool.query('SELECT COUNT(*) '+
   'FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) >= 90 and '+
   '(valor80 + valorIndividual +valorInidividualJefe) <= 99 and gender = $1;',["F"]);
   muyBuenoM = await pool.query('SELECT COUNT(*) '+
   'FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
   '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["M"]);
   muyBuenoF = await pool.query('SELECT COUNT(*) '+
   'FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) >= 80 and '+
   '(valor80 + valorIndividual +valorInidividualJefe) <= 89 and gender = $1;',["F"]);
   BuenoM = await pool.query('SELECT COUNT(*) '+
   'FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
   '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["M"]);
   BuenoF = await pool.query('SELECT COUNT(*) '+
   'FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) >= 70 and '+
   '(valor80 + valorIndividual +valorInidividualJefe) <= 79 and gender = $1;',["F"]);
   insuM = await pool.query('SELECT COUNT(*) FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["M"]);
   insuF = await pool.query('SELECT COUNT(*) FROM report_no_profesionales where (valor80 + valorIndividual +valorInidividualJefe) < 70 and gender = $1;',["F"]);
   notP.push(sobresalienteM.rows);
   notP.push(sobresalienteF.rows);
   notP.push(ExelenteM.rows);
   notP.push(ExelenteF.rows);
   notP.push(muyBuenoM.rows);
   notP.push(muyBuenoF.rows);
   notP.push(BuenoM.rows);
   notP.push(BuenoF.rows);
   notP.push(insuM.rows);
   notP.push(insuF.rows);
   let mapa=[alta,
   iaap,
   sp,
   notP,
   ga];
    res.status(200).json(mapa);
  } catch (error) {
    console.log("ALGO PASA");
    res.status(404).json({
      message: 'No se realizó la acción',
    });
  }

}
const getFunctionary_Inevaluations_stratum = async (req, res) => {
  try {
    /*Todos los datos de la tabla 2 relacionados a Gerencial*/
    const gerenciales = await pool.query('select * from report_gerencial;');
    
     /*Todos los datos de la tabla 2 relacionados a Profesional*/
    const prefesionales = await pool.query('select * from report_profesional;');

     /*Todos los datos de la tabla 2 relacionados a Técnico*/
    const tecnicos = await pool.query('select * from report_tecnico;');

     /*Todos los datos de la tabla 2 relacionados a Calificado*/
    const calificados = await pool.query('select * from report_calificado;');

     /*Todos los datos de la tabla 2 relacionados a Operativo*/
    const operativos = await pool.query('select * from report_operativo;');

    let mapa=[gerenciales.rows,
      prefesionales.rows,
      tecnicos.rows,
      calificados.rows,
      operativos.rows];
    res.status(200).json({
      datos: mapa
  });
  } catch (error) {
    res.status(400).json({
      message: 'No se pudo procesar la acción',
  });
  }
}
const reports_by_family = async (req, res) => {
  try {
    //Alta dirección Publica
    const response1 = await pool.query('select * from return_cant_by_family_alta_publica($1);',["+80"]);
    const response2 = await pool.query('select * from return_cant_by_family_alta_publica($1);',["-80"]);
    const response3 = await pool.query('select * from return_cant_by_family_alta_publica($1);',["+10+15"]);
    const response4 = await pool.query('select * from return_cant_by_family_alta_publica($1);',["-10-15"]);
    const response5 = await pool.query('select * from return_cant_by_family_alta_publica($1);',["+5"]);
    const response6 = await pool.query('select * from return_cant_by_family_alta_publica($1);',["-5"]);
    let alta = [];
    alta.push(response1.rows);
    alta.push(response2.rows);
    alta.push(response3.rows);
    alta.push(response4.rows);
    alta.push(response5.rows);
    alta.push(response6.rows);
    //	--Aqui debería de ir el 5% que le corresponde a Alta Direccion Pública, que se lo da recursos humanos
  
    //Investigacion, analisis y asesoramiento de políticas
    const response11 = await pool.query('select * from return_cant_by_family_inv_ana_ase($1);',["+80"]);
    const response21 = await pool.query('select * from return_cant_by_family_inv_ana_ase($1);',["-80"]);
    const response31 = await pool.query('select * from return_cant_by_family_inv_ana_ase($1);',["+10+15"]);
    const response41 = await pool.query('select * from return_cant_by_family_inv_ana_ase($1);',["-10-15"]);
    const response51 = await pool.query('select * from return_cant_by_family_inv_ana_ase($1);',["+5"]);
    const response61 = await pool.query('select * from return_cant_by_family_inv_ana_ase($1);',["-5"]);
    let iasp = [];
    iasp.push(response11.rows);
    iasp.push(response21.rows);
    iasp.push(response31.rows);
    iasp.push(response41.rows);
    iasp.push(response51.rows);
    iasp.push(response61.rows);
    //prestación de servicios
    let ps = [];
    const response111 = await pool.query('select * from return_cant_by_family_pres_servicios($1);',["+80"]);
    const response211 = await pool.query('select * from return_cant_by_family_pres_servicios($1);',["-80"]);
    const response311 = await pool.query('select * from return_cant_by_family_pres_servicios($1);',["+10+15"]);
    const response411 = await pool.query('select * from return_cant_by_family_pres_servicios($1);',["-10-15"]);
    const response511 = await pool.query('select * from return_cant_by_family_pres_servicios($1);',["+5"]);
    const response611 = await pool.query('select * from return_cant_by_family_pres_servicios($1);',["-5"]);
    ps.push(response111.rows);
    ps.push(response211.rows);
    ps.push(response311.rows);
    ps.push(response411.rows);
    ps.push(response511.rows);
    ps.push(response611.rows);
    //gerencia y administración
    let ga = [];
    const response12 = await pool.query('select * from return_cant_by_family_gere_admin($1);',["+80"]);
    const response22 = await pool.query('select * from return_cant_by_family_gere_admin($1);',["-80"]);
    const response32 = await pool.query('select * from return_cant_by_family_gere_admin($1);',["+10+15"]);
    const response42 = await pool.query('select * from return_cant_by_family_gere_admin($1);',["-10-15"]);
    const response52 = await pool.query('select * from return_cant_by_family_gere_admin($1);',["+5"]);
    const response62 = await pool.query('select * from return_cant_by_family_gere_admin($1);',["-5"]);
    ga.push(response12.rows);
    ga.push(response22.rows);
    ga.push(response32.rows);
    ga.push(response42.rows);
    ga.push(response52.rows);
    ga.push(response62.rows);
    //no profesionales
    let nop = [];
    const response112 = await pool.query('select * from return_cant_by_family_no_profesionales($1);',["+80"]);
    const response212 = await pool.query('select * from return_cant_by_family_no_profesionales($1);',["-80"]);
    const response312 = await pool.query('select * from return_cant_by_family_no_profesionales($1);',["+10+15"]);
    const response412 = await pool.query('select * from return_cant_by_family_no_profesionales($1);',["-10-15"]);
    const response512 = await pool.query('select * from return_cant_by_family_no_profesionales($1);',["+5"]);
    const response612 = await pool.query('select * from return_cant_by_family_no_profesionales($1);',["-5"]);
    nop.push(response112.rows);
    nop.push(response212.rows);
    nop.push(response312.rows);
    nop.push(response412.rows);
    nop.push(response512.rows);
    nop.push(response612.rows);
    var mapa = [];
    mapa.push(alta);
    mapa.push(iasp);
    mapa.push(ps);
    mapa.push(ga);
    mapa.push(nop);
    res.status(200).json({
      datos: mapa
    });
  } catch (error) {
    res.status(400).json({
      message: 'No se pudo procesar la acción',
  });
  }
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
  getFunctionaryByPkID,
  getFunctionaryByID,
  getFunctionaryByIdBoss,
  getFunctionary_evaluations,
  sendMail,
  getFunctionary_Inevaluations_family,
  getFunctionary_Inevaluations_stratum,
  reports_by_family
} 