const db = require('../../../../db/db.con')

const userGetById = async (data) => {
    const query = `Select * from user where user_id=${data}`
    const result = await db.query(query)
    return result[0];
}
const userAll = async () => {
    const query = `Select * from user`
    const result = await db.query(query)
    return result[0];
}
const userAdd = async (data) => {
    const fields = ['user_firstname', 'user_lastname', 'user_phone', 'user_email', 'user_gender', 'user_password'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO products
                (${fields.join()}) VALUES
                (${placeholders})`
    const result = await db.query(query, [body.user_firstname, body.user_lastname, body.user_phone, body.user_email, body.user_gender, user_password])
}
const userUpdate = async (userId, data) => {
    const user = await userGetById(userId);
    const keys = Object.keys(data);
    const fields = data.map(ele => ele + " = ?").join();

    const query = `UPDATE user 
                    SET ${fields} 
                    WHERE user_id = ${userId} `

    const result = await db.query(query, [data.user_first_name || user[0].user_first_name, data.user_last_name || user[0].user_last_name, data.user_phone || user[0].user_phone, data.user_email || user[0].user_email, data.user_gender || user[0].user_gender, data.user_password || user[0].user_password])

    return result[0];
}

const userDelete = async (data) => {
    const query = `Delete from user where user_id=${data}`
    const result = await db.query(query)
    return result[0];
}
module.exports = { userAll, userGetById, userUpdate, userDelete, userAdd }