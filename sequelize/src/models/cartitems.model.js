const sequelize = require('../db/db.con')
const User = require('./user.model')
const Cart = require('./cart.model')

const { Sequelize, DataTypes } = require("sequelize");

const cartitemSchema = sequelize.define("cartitems", {
    cartitem_fk_cart_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Cart,
            key: 'cart_id'
        }
    },
    cartitem_fk_user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    cartitem_prd_qty:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = cartitemSchema;


"Hare Krishna Hare Krishna , Krishna Krishna Hare Hare , Hare Ram Hare Ram , Ram Ram Hare Hare"
