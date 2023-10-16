const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

const categoryGetById = async (data) => {
    const query = `Select * from department where dept_id=${data}`
    const result = await db.query(query)
    return result[0];
}

const categorysGet = async (page) => {
    const query = `SELECT * FROM department LIMIT 10 OFFSET ${(Number(page) - 1) * 10};`
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
    const user = await categoryGetByid(id);
    const query = `UPDATE department 
                   SET  dept_name = ? , dept_updated_by = ?,dept_updated_at = ?
                   WHERE dept_id = ${id} `
    const result = await db.query(query, [data.dept_name, 'Manager', currentTime]);
    return result[0];
}

const categoryDelete = async (id) => {
    const query = `Delete from department where dept_id=${id}`
    const result = await db.query(query)
    return result[0];
}
module.exports = { categorysGet, categoryGetById, categoryUpdate, categoryDelete, categoryAdd }