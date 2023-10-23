const commentServices = require('../services/comments.services')
let { successResponse, errorResponse } = require('../../../../helper/http_response')

const commentAdd = async (req, res) => {
    try {
        let id = req.params.id
        let token = req.user
        let body = req.body
        let result = await commentServices.commentAdd(id, token, body);
        successResponse(res, 'comment added successfully', result)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding comment', error.status)
    }
}



module.exports = { commentAdd }

// let a1 = [1, 2, 3]
// let a2 = [4, 5, 6]

// let addTwoNum = (a1, a2) => {
//     let a = a1.reverse().join('');
//     let b = a2.reverse().join('');
//     let sum = Number(a) + Number(b);
//     let reverse = sum.toString().split('').reverse();
//     let last = reverse.map(e => Number(e));
//     console.log(last);

// }
// addTwoNum(a1, a2)