let users = [
    {
        id: 1,
        username: 'Sachin',
        password: 12345678,
        role: "Doctor"
    },
    {
        id: 2,
        username: 'Pujan',
        password: 87654321,
        role: "Patient"
    }
]
let body = {
    username: 'a',
    password: 12345678
}
// let user = users.find(item => item.username == body.username && item.password == body.password);
// console.log(user);

// a = 1;
// add = 0;
// while (a < 10) {
//     a = a + 1;
//     if(a % 2 > 0)
//     {
//         add = add + a
//     }
//     a = a + 2;
// }
// console.log(add, a);

p = 1;
while (p < 50) {
    p = p * p
    console.log(p);
    if (p % 2 > 0) {
        console.log(p)
    }
    console.log(p);
    p = p + 1;
}


const mysql = require('mysql2/promise');

// create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sachinss@1234',
  database:'college'
});

console.log(connection);

// simple query
// connection.query(
//   'SELECT * FROM `students` WHERE `name` = "SACHIN" AND id = 101',
//   function(err, results, fields) {
//     console.log(err);
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// with placeholder
// connection.query(
//   'SELECT * FROM `course` WHERE `course_name` = "MCA" ',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );