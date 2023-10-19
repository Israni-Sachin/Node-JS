const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

const categoryGetById = async (id, token) => {
    const query = `Select dept_id,dept_name from department where dept_id=${id}`
    const result = await db.query(query)
    let qryForProducts;
    if (token.user_role == "manager") {
        qryForProducts = `select * from products where prd_dept_id=${id}`
    }
    else {
        qryForProducts = `select prd_id,prd_name,prd_price,prd_qty,prd_dept_id from products where prd_is_visible=1 and prd_dept_id=${id}`
    }
    const products = await db.query(qryForProducts);
    result[0][0].products = products[0]
    return result[0];
}

const categorysGet = async (page) => {
    const query = `SELECT dept_id,dept_name FROM department LIMIT 10 OFFSET ${(Number(page) - 1) * 10};`
    const result = await db.query(query)
    return result[0];
}

const categoryAdd = async (body) => {
    const fields = ['dept_name', 'dept_created_by', 'dept_created_at', 'dept_updated_by', 'dept_updated_at'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO department
    (${fields.join()}) VALUES
    (${placeholders})`
    const result = await db.query(query, [body.dept_name, 'Manager', currentTime, 'Manager', currentTime])
}

const categoryUpdate = async (id, data) => {
    const user = await categoryGetById(id);
    const query = `UPDATE department 
                   SET  dept_name = ? , dept_updated_by = ?,dept_updated_at = ?
                   WHERE dept_id = ${id} `
    const result = await db.query(query, [data.dept_name, 'Manager', currentTime]);
    return result[0];
}

const categoryDelete = async (id) => {
    const query = `Delete from department where dept_id=${id}`
    const result = await db.query(query)
    const qryForProducts = `DELETE from products where prd_dept_id=${id}`
    const res = await db.query(query);
    return result[0];
}
module.exports = { categorysGet, categoryGetById, categoryUpdate, categoryDelete, categoryAdd }
