// const { log } = require("console");
const fs = require("fs");
const str = 'Hello world!';

// fs.writeFile('./file1.txt', str, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('The file was saved!');
// })

// fs.readFile('./file1.txt', (err,data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })



// fs.writeFile('./file1.txt', str, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('The file was saved!');
//     fs.readFile('./file1.txt', (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(data.toString());
//     })
// })

fs.access('./file1.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('file exists');
    }
})

// menu driven function

// file manager
// create file => filename/filepath,content
// read and display
// delete
// create folder
