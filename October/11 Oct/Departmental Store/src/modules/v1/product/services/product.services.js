const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

const productGetById = async (id, token) => {
    let query = '';
    if (token.user_role == 'manager') {
        query = `Select * from products where prd_id=${id}`
    }
    else {
        query = `Select prd_id,prd_name,prd_price,prd_qty,prd_dept_id from products where prd_id=${id} AND prd_is_visible=1`
    }
    const result = await db.query(query)
    delete result[0][0].prd_is_visible;
    delete result[0][0].prd_min_qty;
    return result[0];
}

const productsGet = async (page, token) => {
    let query = '';
    if (token.user_role == 'manager') {
        query = `SELECT * FROM products LIMIT 10 OFFSET ${(Number(page) - 1) * 10};`
    }
    else {
        query = `SELECT prd_id,prd_name,prd_price,prd_qty,prd_dept_id FROM products LIMIT 10 OFFSET ${(Number(page) - 1) * 10} WHERE prd_is_visible = 1;`
    }
    const result = await db.query(query)
    return result[0];
}

const productAdd = async (body) => {
    const fields = ['prd_name', 'prd_price', 'prd_qty', 'prd_min_qty', 'prd_is_visible', 'prd_dept_id', 'prd_created_by', 'prd_created_at', 'prd_updated_by', 'prd_updated_at'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO products
                (${fields.join()}) VALUES
                (${placeholders})`
    const result = await db.query(query, [body.prd_name, body.prd_price, body.prd_qty, body.prd_min_qty, body.prd_is_visible, body.prd_dept_id, 'manager', currentTime, 'manager', currentTime])
    productImageAdd(body)
}

const productImageAdd = async (body) => {
    const query = `Select * from products where prd_name="${body.prd_name}"`
    const res = await db.query(query);

    for (let i = 0; i < body.img.length; i++) {
        const fieldsForImage = ['prdimg_prd_id', 'prdimg_img', 'prdimg_created_at', 'prdimg_updated_at']
        const PH = '?,'.repeat(fieldsForImage.length).replace(/,$/, '');
        const queryForImage = `INSERT INTO products_img
                            (${fieldsForImage.join()}) VALUES
                            (${PH})`
        const res1 = await db.query(queryForImage, [res[0][0].prd_id, body.img[i], currentTime, currentTime]);
    }

}

const productUpdate = async (id, data, token) => {
    // const user = await productGetById(id, token);
    const product = Object.entries(data);
    const prd = product.filter(ele => ele[0].includes("prd_"));
    const prdimg = product.filter(ele => !ele[0].includes("prd_"));
    if (prd.length != 0) {
        const fields = prd.map(ele => ele[0] + " = ?").join();
        const values = prd.map(ele => ele[1]);
        const query = `UPDATE products 
                       SET ${fields} 
                       WHERE prd_id = ${id} `
        const result = await db.query(query, values);
    }
    if (prdimg.length != 0) {
        const fields = prdimg.map(ele => ele[0] + " = ?").join();
        const values = prdimg.map(ele => ele[1]);
        const query = `UPDATE products_img 
                       SET ${fields} 
                       WHERE prdimg_prd_id = ${id} `
        const result = await db.query(query, values);
    }

    // const fields = ['prd_name', 'prd_price', 'prd_qty', 'prd_min_qty', 'prd_is_visible', 'prd_dept_id'];
    // const result = await db.query(query, [data.prd_name || user[0].prd_name, data.prd_price || user[0].prd_price, data.prd_qty || user[0].prd_qty, data.prd_min_qty || user[0].prd_min_qty, data.prd_is_visible || user[0].prd_is_visible, data.prd_dept_id || user[0].prd_dept_id])
}

const productDelete = async (id) => {
    const query = `Delete from products where prd_id=${id}`
    await db.query(`SET FOREIGN_KEY_CHECKS=0`);
    const result = await db.query(query)
    await db.query(`SET FOREIGN_KEY_CHECKS=1`);
    return result[0];
}
module.exports = { productGetById, productsGet, productUpdate, productAdd, productDelete }