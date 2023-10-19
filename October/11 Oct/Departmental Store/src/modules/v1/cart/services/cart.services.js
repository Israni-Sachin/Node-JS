const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');


const cartGet = async (token) => {
    const query = `SELECT * FROM cart WHERE cart_user_id = '${token.user.id}'`
    const result = await db.query(query);
    return result[0];
}
const userGet = async (id) => {
    const query = `SELECT * FROM user WHERE user_id = ${id}`
    const user = await db.query(query);
    return user;
}

const cartIdGet = async (id) => {
    const query = `SELECT * FROM cart WHERE cart_user_id = ${id}`
    const result = await db.query(query);
    return result;
}

const cartItemsAdd = async (body, cartId) => {
    const fields = ['cartitem_cart_id', 'cartitem_prd_id', 'cartitem_qty', 'cartitem_created_by', 'cartitem_created_at', 'cartitem_updated_by', 'cartitem_updated_at'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO cart_items
                (${fields.join()}) VALUES
                (${placeholders})`
    const result = await db.query(query, [cartId.cart_id, body.prd_id, body.qty, currentTime, user.user_firstname, currentTime]);
}

const cartGetById = async (id, token) => {
    const query = `Select * from cart where cart_id=${id}`
    const result = await db.query(query)
    return result[0];
}

const cartsGet = async (page, token) => {
    let query = '';
    if (token.user_role == 'manager') {
        query = `SELECT * FROM carts LIMIT 10 OFFSET ${(Number(page) - 1) * 10};`
    }
    else {
        query = `SELECT * FROM carts LIMIT 10 OFFSET ${(Number(page) - 1) * 10} WHERE prd_is_visible = 1;`
    }
    const result = await db.query(query)
    return result[0];
}

const cartAdd = async (body, id) => {

    let cartId = await cartIdGet(id);
    if (cartId.length == 0) {
        let user = await userGet(id);
        const fields = ['cart_user_id', 'cart_created_by', 'cart_created_at', 'cart_updated_by', 'cart_updated_at'];
        const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
        const query = `INSERT INTO cart
        (${fields.join()}) VALUES
        (${placeholders})`
        const result = await db.query(query, [user.user_id, user.user_firstname, currentTime, user.user_firstname, currentTime]);

        await cartItemsAdd(body, cartId);
    }
    else {
        await cartItemsAdd(body, cartId);
    }
}
const cartUpdate = async (body, id) => {

    let cartDetails = await cartId(id);

    const keys = Object.keys(body);
    keys.push('cart_updated_by', 'cart_updated_at');

    const fields = keys.map(ele => ele + " = ?").join();
    const query = `UPDATE cart_items
    SET ${fields}
    WHERE cartitem_cart_it = ${cartDetails.cart_id} `

    const values = Object.values(body);
    values.push(cartDetails.cart_created_by, currentTime);

    const result = await db.query(query, values);
}

// const cartUpdate = async (data, token) => {
//     const user = await cartGetById(id, token);
//     const keys = Object.keys(data);
//     // const fields = ['prd_name', 'prd_price', 'prd_qty', 'prd_min_qty', 'prd_is_visible', 'prd_dept_id'];
//     const fields = keys.map(ele => ele + " = ?").join();
//     const query = `UPDATE carts 
//                    SET ${fields} 
//                    WHERE prd_id = ${id} `
//     // const result = await db.query(query, [data.prd_name || user[0].prd_name, data.prd_price || user[0].prd_price, data.prd_qty || user[0].prd_qty, data.prd_min_qty || user[0].prd_min_qty, data.prd_is_visible || user[0].prd_is_visible, data.prd_dept_id || user[0].prd_dept_id])
//     const result = await db.query(query, Object.values(data));
//     return result[0];
// }

const cartDelete = async (id) => {
    let cartDetails = await cartIdGet(id);
    await db.query(`SET FOREIGN_KEY_CHECKS=0`);
    await db.query(`DELETE from cart_items WHERE cartitems_cart_id = ${cartDetails.cart_id}`);
    const query = `DELETE from cart where cart_user_id=${id}`
    const result = await db.query(query)
    await db.query(`SET FOREIGN_KEY_CHECKS=1`);
    return result[0];
}
module.exports = { cartGetById, cartsGet, cartUpdate, cartAdd, cartDelete, cartGet }