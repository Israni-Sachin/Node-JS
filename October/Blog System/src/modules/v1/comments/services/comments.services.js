const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

const commentAdd = async (blog_id, token, body) => {
    // const qryForBlog = await db.query(`select * from blog where blog_id = ${blog_id}`);

    const fields = ['cmt_blog_id', 'cmt_description', 'cmt_user_id', 'cmt_created_at']
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO comments 
                    (${fields.join()}) VALUES
                    (${placeholders})`;
    const result = await db.query(query, [blog_id, body.description, token.user_id, currentTime]);
    console.log(result[0]);
}

module.exports = { commentAdd }