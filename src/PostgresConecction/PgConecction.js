const {Pool} = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'sedi',
    port: '5432'
});
module.exports = {
    pool
}