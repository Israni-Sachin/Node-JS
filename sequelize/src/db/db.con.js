const { Sequelize } = require('sequelize');
const sequelizeConfig = require('../configs/db.config')

// const sequelize = new Sequelize(sequelizeConfig);

const sequelize = new Sequelize('students', 'root', 'sachinss@1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully with SQL database through Sequelize');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize