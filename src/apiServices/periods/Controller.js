const { response, json } = require('express');
const {pool} = require('../../PostgresConecction/PgConecction');

const getPeriods = async (req,res)=>{
    const response = await pool.query('select pk_period_name,status,beginning,end_ from public."Period";');
    res.status(200).json(response.rows);
}
const addPeriod = async (req,res)=>{
    const {periodName, periodStart, periodEnd, cycleStart, cycleEnd, 
        createdBy, copyForm, componetsPorcen,indicatorPorc}=req.body;
        if (copyForm === '' || copyForm === 'Seleccionar'){
            const response = await pool.query('insert into public."Period"(pk_period_name, beginning, end_, cycle_start, end_of_cycle, percentage_indicators, percentage_components, created_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
            [periodName, periodStart, periodEnd, cycleStart, cycleEnd, parseInt(indicatorPorc),parseInt(componetsPorcen),createdBy]);
            res.json({
                message: 'Periodo creado con exito',
            })
        }else{
            const response = await pool.query('insert into public."Period"(pk_period_name, beginning, end_, cycle_start, end_of_cycle, percentage_indicators, percentage_components, created_by,copy_of) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
            [periodName, periodStart, periodEnd, cycleStart, cycleEnd, parseInt(indicatorPorc),parseInt(componetsPorcen),createdBy,copyForm]);
            res.json({
                message: 'Periodo creado con exito',
            })
        }

};

const getPeriodByName = async (req,res)=>{
    const pk_period_name = req.params.pk_period_name;
    const response = await pool.query('select * from public."Period" where "pk_period_name" = $1;', [pk_period_name]);
    res.status(200).json(response.rows);
  }

module.exports = {
    getPeriods,
    addPeriod,
    getPeriodByName
}