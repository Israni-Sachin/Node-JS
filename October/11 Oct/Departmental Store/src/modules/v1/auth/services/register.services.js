const db = require('../../../../db/db.con')

const register = async (data) => {
    const fields = ['user_firstname', 'user_lastname', 'user_email', 'user_gender', 'user_password','user_role'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO user
                (${fields.join()}) VALUES
                (${placeholders})`
    const result = await db.query(query, [data.user_firstname, data.user_lastname, data.user_email, data.user_gender, data.user_password,'customer']);
}

module.exports = register