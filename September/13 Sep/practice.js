var colors = require('colors');

// function emailAdd(to) {
//     return function subject(subject) {
//         return function body(body) {
//             console.log(`Sending emial to ${to} \n${subject} \n${body}`.blue);
//         }
//     }
// }

// emailAdd('sachinisrani@gmial.com')('Hello world')('You got a new email')

// const emailAdd = (to) => (subject) => (body) => `Sending emial to ${to} \n${subject} \n${body}`.blue

// console.log(emailAdd('sachinisrani@gmial.com')('Hello world')('You got a new email'));

// ------------------------------- Callbacks -------------------------------

// function add(a, b, c, cb) {
//     console.log(a + b + c);
//     cb();
// }

// function cb() {
//     console.log('Your Process was successfully completed'.bgBlue);
// }

// add(5, 2, 5, cb);
const fs = require('fs');
// fs.writeFile('./input.txt','Hello there I am using VS Code'.bgRed,(error) => {
//    if(error) {
//     console.log(error);
//    } 
//    else{
//     console.log('File created successfully');
//    }
// });

// ---------------------- Asynchronous program ----------------------

// const fs = require('fs');
fs.readFile('input.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString()+'asynchronous'.bgMagenta);
});

//---------------------- Synchronous program ----------------------

const data = fs.readFileSync('input.txt');
console.log(data.toString()+"synchronous".bgCyan);
