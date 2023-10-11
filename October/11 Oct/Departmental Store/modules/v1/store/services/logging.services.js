let db = require('../../../../db/db.con');


async function login(body) {
    
    let query = `SELECT * FROM user WHERE user_firstname = '${body.user_firstname}' AND user_password = '${body.user_password}'`
    let user = await db.query(query);
    if (user[0] == undefined) {
        return false
    }
    let data = { ...user[0] };
    delete data.user_passwordpassword;
    return data;
    
}

module.exports = { login };