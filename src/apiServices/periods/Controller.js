const { response, json } = require('express');
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

const getPeriods = async (req, res) => {
    const response = await pool.query('select pk_period_name,status,beginning,end_ from public."Period";');
    res.status(200).json(response.rows);
}
const addPeriod = async (req, res) => {
    console.log(req.body)
    const { pk_period_name, beginning, end_, cycle_start, end_of_cycle, percentage_indicators, percentage_components,
        created_by, copy_of } = req.body;
        
    if (copy_of === '' || copy_of === 'Seleccionar') {
        const response = await pool.query('insert into public."Period"(pk_period_name, beginning, end_, cycle_start, end_of_cycle, percentage_indicators, percentage_components, created_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
            [pk_period_name, beginning, end_, cycle_start, end_of_cycle, parseInt(percentage_indicators), parseInt(percentage_components), created_by]);
        res.json({
            message: 'Periodo creado con exito',
        })
    } else {
        const response = await pool.query('insert into public."Period"(pk_period_name, beginning, end_, cycle_start, end_of_cycle, percentage_indicators, percentage_components, created_by,copy_of) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
            [pk_period_name, beginning, end_, cycle_start, end_of_cycle, parseInt(percentage_indicators), parseInt(percentage_components), created_by, copy_of]);
        res.json({
            message: 'Periodo creado con exito',
        })
    }

};

const getPeriodByName = async (req, res) => {
    const pk_period_name = req.params.pk_period_name;
    const response = await pool.query('select * from showPeriod_by_Period_name($1);', [pk_period_name]);
    if (response.rows.length != 0) {
        res.status(200).json(response.rows);
    } else {
        res.status(400).json({
            message: 'No se encontró el periodo',
        });
    }

}

const initPeriod = async (req, res) => {
    const pk_period_name = req.params.pk_period_name;
    const response = await pool.query('select period_init($1);', [pk_period_name]);
    var x = response.rows[0].period_init;
    if (x == true) {
        res.status(200).json({
            message: 'Periodo Iniciado'
        });
    } else {
        res.status(400).json({
            message: 'No se inicio el periodo',
        });
    }
}
const stopPeriod = async (req, res) => {
    const pk_period_name = req.params.pk_period_name;
    const response = await pool.query('select period_finish($1);', [pk_period_name]);
    var x = response.rows[0].period_finish;
    if (x == true) {
        res.status(200).json({
            message: 'Periodo Concluido'
        });
    } else {
        res.status(400).json({
            message: 'No se pudo concluir el periodo',
        });
    }
}
const deletePeriod = async (req, res) => {
    const pk_period_name = req.params.pk_period_name;
    const response = await pool.query('select period_delete($1);', [pk_period_name]);
    var x = response.rows[0].period_delete;
    if (x == true) {
        res.status(200).json({
            message: 'Periodo Eliminado'
        });
    } else {
        res.status(400).json({
            message: 'No se pudo eliminar el periodo',
        });
    }
}

module.exports = {
    getPeriods,
    addPeriod,
    getPeriodByName,
    sendMail,
    initPeriod,
    stopPeriod,
    deletePeriod
}