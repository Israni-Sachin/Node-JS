const joi = require('joi');

const cartDelSchema = joi.object({
    cart_id: joi.number().items(joi.string().required()
        .messages({
            'number.base': 'cart_items must be a string'
        }))
});

module.exports = cartDelSchema;