const sequelize = require('../db/db.con')
const User = require('./user.model')

const { Sequelize, DataTypes } = require("sequelize");

const cartSchema = sequelize.define("carts", {
    cart_fk_user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
});

module.exports = cartSchema;


"Hare Krishna Hare Krishna , Krishna Krishna Hare Hare , Hare Ram Hare Ram , Ram Ram Hare Hare"
