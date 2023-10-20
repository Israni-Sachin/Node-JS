const db = require('../../../../db/db.con');
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

const register = async (data) => {
    const qry = `Select * from users where user_email = '${data.user_email}'`
    const res = await db.query(qry);
    if (res[0].length != 0) {
        return undefined;
    }
    else {
        const fields = ['user_name', 'user_phone', 'user_email', 'user_password', 'user_role', 'user_created_by', 'user_created_at'];
        const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
        const query = `INSERT INTO users
        (${fields.join()}) VALUES
        (${placeholders})`
        const result = await db.query(query, [data.user_name, data.user_phone, data.user_email, data.user_password, data.user_role, data.user_name, currentTime]);
        return true;
    }
}

async function login(body) {

    let query = `SELECT * FROM users WHERE user_email = '${body.user_email}' AND user_password = '${body.user_password}'`
    let user = await db.query(query);
    if (user[0] == undefined) {
        return false
    }
    let data = { ...user[0] };
    delete data.user_password;
    return data;

}

module.exports = { login, register };