const { response } = require('express');
const {pool} = require('../../PostgresConecction/PgConecction');

const addFunctionary = async (req, res) => {
    
    var id = Math.floor(1000 + Math.random() * 9000)
    

    const { vice_ministry, deparment, position_number, name_fun, last_name, id_fun, 
        organizational_unit, unit, job_class, specialty, subspecialty, own_specialty, 
        post, residency, appointment_condition, occupational_stratum, family_group, mail, 
        telephone, status} = req.body;
    
    /*const response = await pool.query('INSERT INTO public."Functionary"(pk_id_num, vice_ministry, deparment ,position_number, name_fun, last_name, id_fun, organizational_unit, unit, job_class, specialty, subspecialty, own_specialty, post, residency, appointment_condition, occupational_stratum, family_group, mail, telephone, status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)', 
                [id, vice_ministry, deparment, position_number, name_fun, last_name, id_fun, 
                    organizational_unit, unit, job_class, specialty, subspecialty, own_specialty, 
                    post, residency, appointment_condition, occupational_stratum, family_group, mail, 
                    telephone, status]);*/
    
    res.json({
        message: 'Funcionario agregado correctamente',
        body:{
            user:{id, vice_ministry, deparment, position_number, name_fun, last_name, 
                id_fun, organizational_unit, unit, job_class, specialty, subspecialty, 
                own_specialty, post, residency, appointment_condition, occupational_stratum, 
                family_group, mail, telephone, status}
        }
    })
};

module.exports = {
    addFunctionary
} 