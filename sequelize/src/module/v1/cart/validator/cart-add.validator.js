const joi = require('joi');

const cartAddSchema = joi.object({
    cart_id: joi.number().required()
        .messages({
            'number.base': 'cartitm_prd_qty must be a number'
        }),
    cart_fk_user_id: joi.string().required()
        .messages({
            'string.base': 'cartitm_fk_prd_id must be a string'
        })
});

module.exports = cartAddSchema;