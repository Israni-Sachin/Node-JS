const db = require('../../../../db/db.con')

const userGetById = async (data) => {
    const query = `Select * from user where user_id=${data}`
    const result = await db.query(query)
    return result[0];
}
const userProfile = async (data) => {
    const query = `Select * from user where user_id=${data}`
    const result = await db.query(query)
    return result[0];
}
const userAll = async () => {
    const query = `Select * from user`
    const result = await db.query(query)
    return result[0];
}
const userAdd = async (body) => {
    const fields = ['user_firstname', 'user_lastname', 'user_phone', 'user_email', 'user_gender', 'user_password', 'user_role'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO user
    (${fields.join()}) VALUES
    (${placeholders})`
    const result = await db.query(query, [body.user_firstname, body.user_lastname, body.user_phone, body.user_email, body.user_gender, body.user_password, body.user_role]);

    if (body.user_role == 'staff') {
        const qry = `Select * from user where user_phone=${body.user_phone}`
        const res = await db.query(qry);
        // console.log(res[0]);
        // console.log(res[0][0].user_id);
        const fields = ['st_user_id', 'st_joining_date', 'st_dept_id'];
        const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
        const query = `INSERT INTO staff
                    (${fields.join()}) VALUES
                    (${placeholders})`
        const result = await db.query(query, [res[0][0].user_id, body.st_joining_date, body.st_dept_id]);
    }
}
const userUpdate = async (userId, data) => {
    // const user = await userGetById(userId);
    const keys = Object.keys(data);
    const fields = keys.map(ele => ele + " = ?").join();
    const query = `UPDATE user 
                    SET ${fields} 
                    WHERE user_id = ${userId} `

    const result = await db.query(query, Object.values(data))
    return result[0];
}
const userProfileUpdate = async (userId, data) => {
    // const user = await userGetById(userId);
    const keys = Object.keys(data);
    const fields = keys.map(ele => ele + " = ?").join();
    const query = `UPDATE user 
                    SET ${fields} 
                    WHERE user_id = ${userId} `

    const result = await db.query(query, Object.values(data));
    return result[0];
}

const userDelete = async (data) => {
    const query = `Delete from user where user_id=${data}`
    const result = await db.query(query)
    return result[0];
}
module.exports = { userAll, userGetById, userUpdate, userDelete, userAdd, userProfile, userProfileUpdate }