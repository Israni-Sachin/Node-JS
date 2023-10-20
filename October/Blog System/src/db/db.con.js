const mysql = require('mysql2/promise');
const dbConfig = require('../config/db.config');
const pool = mysql.createPool(dbConfig);


pool.query('SELECT 1+1 as value')
    .then((res) => console.log('DB Connected Successfully', res))
    .catch((err) => console.log(err))

module.exports = pool;