const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');


const userGet = async (id) => {
    const query = `SELECT * FROM users WHERE user_id = ${id}`
    const user = await db.query(query);
    return user[0];
}

const authorGet = async (id) => {
    const query = `SELECT * FROM blogs WHERE blog_user_id = ${id}`
    const result = await db.query(query);
    return result[0];
}

const categoryGet = async (id) => {
    const query = `SELECT * FROM user WHERE user_id = ${id}`
    const result = await db.query(query);
    return result[0];
}

const categoryGetById = async (id) => {
    const query = `SELECT * FROM category WHERE ctg_id = ${id}`
    const result = await db.query(query);
    return result[0];
}
const authorGetById = async (id) => {
    const query = `SELECT * FROM blogs WHERE ctg_id = ${id}`
    const result = await db.query(query);
    return result[0];
}


module.exports = { categoryGetById, authorGetById, authorGet, categoryGet }