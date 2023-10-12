const db = require('../../../../db/db.con')

const productGetByName = async (data) => {
    const query = `Select * from products where prd_name=${data}`
    const result = await db.query(query)
    return result[0];
}

const productsGet = async (page) => {
    const query = `SELECT * FROM products LIMIT 10 OFFSET ${Number(page) - 1};`
    const result = await db.query(query)
    return result[0];
}

const productAdd = async (body) => {
    const fields = ['prd_name', 'prd_price', 'prd_qty', 'prd_min_qty', 'prd_is_visible', 'prd_dept_id'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO products
                (${fields.join()}) VALUES
                (${placeholders})`
    const result = await db.query(query, [body.prd_name, body.prd_price, body.prd_qty, body.prd_min_qty, body.prd_is_visible, prd_dept_id])
}

const productUpdate = async (name, data) => {
    const user = await productGetByName(name);
    const keys = Object.keys(data);
    // const fields = ['prd_name', 'prd_price', 'prd_qty', 'prd_min_qty', 'prd_is_visible', 'prd_dept_id'];
    const fields = data.map(ele => ele + " = ?").join();
    const query = `UPDATE products 
                   SET ${fields} 
                   WHERE prd_name = ${name} `
    const result = await db.query(query, [data.prd_name || user[0].prd_name, data.prd_price || user[0].prd_price, data.prd_qty || user[0].prd_qty, data.prd_min_qty || user[0].prd_min_qty, data.prd_is_visible || user[0].prd_is_visible, data.prd_dept_id || user[0].prd_dept_id])
    return result[0];
}

const productDelete = async (name) => {
    const query = `Delete from products where prd_name=${name}`
    const result = await db.query(query)
    return result[0];
}
module.exports = { productGetByName, productsGet, productUpdate, productAdd, productDelete }