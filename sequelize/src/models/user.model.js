const sequelize = require('../db/db.con')

const { Sequelize, DataTypes } = require("sequelize");

const users = sequelize.define("users", {
    user_fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_lname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = users