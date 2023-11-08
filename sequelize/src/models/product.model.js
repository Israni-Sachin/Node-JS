const sequelize = require('../db/db.con')

const { Sequelize, DataTypes } = require("sequelize");

const productsSchema = sequelize.define("products", {
    prd_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prd_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    prd_img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prd_is_visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = productsSchema;