const db = require('../../../../db/db.con')
const moment = require('moment');
const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

// console.log(result);
const blogGet = async (data) => {
    const query = `Select * from blogs where blog_id=${data}`
    const result = await db.query(query)
    return result[0];
}
const blogAll = async (data) => {
    const query = `Select * from blogs where blog_user_id=${data}`
    const result = await db.query(query)
    return result[0];
}
const blogAdd = async (body, token) => {
    let qry = `Select * from users where user_id=${token.user_id}`
    let res = await db.query(qry);
    
    const fields = ['blog_user_id', 'blog_img', 'blog_tiltle', 'blog_ctg_id', 'blog_description', 'blog_created_by', 'blog_created_at'];
    const placeholders = '?,'.repeat(fields.length).replace(/,$/, '');
    const query = `INSERT INTO blogs
    (${fields.join()}) VALUES
    (${placeholders})`
    const result = await db.query(query, [token.user_id, body.blog_img, body.blog_title, body.blog_ctg_id, body.blog_description, res[0][0].user_name, currentTime]);
}

const blogDelete = async (data) => {
    const query = `Delete from blogs where blog_id=${data}`
    const result = await db.query(query)
    return result[0];
}

module.exports = { blogGet, blogAll, blogAdd, blogDelete }

// data:[
//     {...blog},
//     {
//         comments:{},
//         reply:{}
//     }
// ]

// const comments = [{ comment: "helllo", cmt_id: 1 }, { comment: "hii", cmt_id: 2 }, { comment: "kyu", cmt_id: 3 },]
// const replies = [{ replay_comment_id: 1, reply: "hey" }, { replay_comment_id: 1, reply: 'aksnfks' }, { replay_comment_id: 2, reply: 'ksndjs' }]

// const result = comments.map(e => {
//     // if (e.cmt_id == replies.replay_comment_id) {
//     //     return e
//     // }
//     const comments = { commentsData: e }
//     const reply = replies.filter(r => e.cmt_id == r.replay_comment_id)
//     // console.log(reply);
//     comments.reply = reply;
//     return comments;
// })
// let abc = comments.map((ele, index) => {
//     let abc = replies.filter(e => {
//         return e.replay_comment_id == ele.cmt_id;
//     })

//     return { commentData: ele, reply: abc }
//     // return replies.filter((e,i)=>{
//     //     ele.cmt_id === e.replay_comment_id;
//     // })
// })
// console.log(abc);

// let a = [1, 1, 1, 1, 2, 5, 4, 3, 2, 1, 5]
// let b = new Set(a)
// console.log(b);

// console.log(result);

// sub querys and where in clause


