const Joi = require('joi');
const { successResponse, errorResponse } = require('../helper/http_response')

// const validation = (req, res, next) => {
//     const schema = Joi.object().keys({
//         name: Joi.string().required(),
//         password: Joi.string().required(),
//         email: Joi.string().optional(),
//         category: Joi.string().optional().valid('car', 'bike', 'activa'),
//         age: Joi.number().optional().min(18).max(60),
//         salary: Joi.number().when('age', { is: 25, then: Joi.required(), otherwise: Joi.optional() }),
//         item: Joi.object().keys({
//             id: Joi.number().required(),
//             name: Joi.string().required()
//         }).unknown(true),
//         items: Joi.array().items(),
//         confirm_password: Joi.string().valid(Joi.ref('password')).required(),
//         limit: Joi.number().required(),
//         numbers: Joi.array().min(Joi.ref('limit')).required(),
//         email: Joi.string().email({
//             minDomainSegments: 2,
//             tlds: { allow: ["com", "in"] }
//         }),
//         fname: Joi.string(),
//         lname: Joi.string(),
//         custome_name: Joi.string().custom((value, msg) => {
//             if (value === "sachin") {
//                 return msg.message("Not allowed to write Sachin in custom_name");
//             }
//             return true;
//         })

//     }).xor("fname", "lname").unknown(false);
//     const { error, value } = schema.validate(req.body, { abortEarly: false });
//     // console.log(error, value);
//     if (error) {
//         res.status(400).json({ error: error.details })
//     }
//     else {
//         // console.log(value);
//         res.status(200).json("Done");
//         next();
//     };
// }

// -------------------------- validation with joi for register --------------------------

const validation = (schema) => {
   return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            console.log(error);
            errorResponse(res, { sysmsg: error, msg: "Error while registering" }, error.status);
        }
        else {
            next();
        }
    }
}
module.exports = validation