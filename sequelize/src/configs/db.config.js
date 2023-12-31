require('dotenv').config();

const sequelizeConfig = {
    database: process.env.database,
    username: process.env.username,
    password: process.env.password,
    host: process.env.host,
    dialect: process.env.dialect
}

module.exports = sequelizeConfig;