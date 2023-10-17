const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

const orderGet = async (token) => {
    const query = `SELECT * FROM orders WHERE o_user_id =${token.user_id}`;
    const result = await db.query(query);
    console.log(result);
    
}

// const userGet = async (id) => {
//     const query = `SELECT * FROM user WHERE user_id = ${id}`
//     const user = await db.query(query);
//     return user;
// }

// const orderIdGet = async (id) => {
//     const query = `SELECT * FROM order WHERE order_user_id = ${id}`
//     const result = await db.query(query);
//     return result;
// }

// const orderItemsAdd = async (body, orderId) => {
//     const fields = ['orderitem_order_id', 'orderitem_prd_id', 'orderitem_qty', 'orderitem_created_by', 'orderitem_created_at', 'orderitem_updated_by', 'orderitem_updated_at'];
//     const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
//     const query = `INSERT INTO order_items
//                 (${fields.join()}) VALUES
//                 (${placeholders})`
//     const result = await db.query(query, [orderId.order_id, body.prd_id, body.qty, currentTime, user.user_firstname, currentTime]);
// }

const orderGetById = async (id) => {
    const query = `Select * from order where order_id=${id}`
    const result = await db.query(query)
    return result[0];
}

const ordersGet = async (page, token) => {
    let query = '';
    if (token.user_role == 'manager') {
        query = `SELECT * FROM orders LIMIT 10 OFFSET ${(Number(page) - 1) * 10};`
    }
    else {
        query = `SELECT * FROM orders LIMIT 10 OFFSET ${(Number(page) - 1) * 10} WHERE prd_is_visible = 1;`
    }
    const result = await db.query(query)
    return result[0];
}

module.exports = { orderGetById, ordersGet, orderGet }