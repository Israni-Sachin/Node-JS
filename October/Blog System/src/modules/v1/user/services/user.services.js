const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');


const userGet = async (name) => {
    const query = `SELECT user_id FROM users WHERE user_name = ${name}`
    const user = await db.query(query);
    return user[0];
}

const authorsGet = async () => {
    const query = `SELECT user_id,user_name,user_email FROM users WHERE user_role = 'author'`
    const result = await db.query(query);
    return result[0];
}

const categorysGet = async () => {
    const query = `SELECT * FROM category`
    const result = await db.query(query);
    return result[0];
}

const categoryGetByName = async (name) => {
    const ctg = await db.query(`SELECT ctg_id FROM category WHERE ctg_name = '${name}'`);
    
    const query1 = `SELECT * FROM category WHERE ctg_name = '${name}'`
    const query2 = `SELECT blog_id, blog_user_id, blog_ctg_id, blog_img, blog_tiltle, blog_description FROM blogs WHERE blog_ctg_id = ${ctg[0][0].ctg_id}`
    const result1 = db.query(query1);
    const result2 = db.query(query2);
    const result = await Promise.all([result1, result2]);
    
    let category = result[0][0].map((ele, index) => {
        let blogs = result[1][0].filter(e => {
            if (e.blog_ctg_id == ele.ctg_id) {
                delete e.blog_ctg_id;
                return e;
            }
        })

        return { category: ele, blogs: blogs }
    })
    
    return category;
}

const authorGetByName = async (name) => {
    const user = await userGet(name);

    const query1 = `SELECT user_id, user_name, user_email FROM users WHERE user_name = '${name}' and user_role = 'author'`
    const query2 = `SELECT blog_id, blog_ctg_id, blog_img, blog_tiltle, blog_description, blog_user_id FROM blogs WHERE blog_user_id = ${user[0].user_id}`
    const result1 = db.query(query1);
    const result2 = db.query(query2);
    const result = await Promise.all([result1, result2]);

    let mainRes = result[0][0].map((ele, index) => {
        let abc = result[1][0].filter(e => {
            if (e.blog_user_id == ele.user_id) {
                delete e.blog_user_id;
                return e;
            }
        })

        return { userData: ele, blogs: abc }
    })

    return mainRes;
}


module.exports = { categoryGetByName, authorGetByName, authorsGet, categorysGet }