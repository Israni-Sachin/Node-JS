// let fs = require('fs');
// let readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// function loop() {
//     readline.question('Do you want to do something with the file and folder?\n', (answer) => {
//         if (answer.toLowerCase() === 'yes') {
//             yes(readline);
//         }
//         else if (answer.toLowerCase() === 'no') {
//             console.log('Goodbye!');
//             process.exit();
//         }
//         else {
//             console.log('Invalid input');
//             loop();
//         }
//     })
// }

// loop();

// function yes() {
//     readline.question('\nWhat do you want to do? \n1.Create Folder/File \n2.Read File \n3.Delete Folder/File \n \nChoice:', (answer) => {
//         switch (answer) {
//             case '1':
//                 let create = require('./modules/V1/create_file');
//                 function create1() {
//                 readline.question('\nWhat do you want to create? \n1.folder \n2.file Choice:\n', (answer) => {
//                         switch (Number(answer)) {
//                             case 1:
//                                 readline.question('Enter Folder Name: ', (a) => {
//                                     create.createFolder(a, readline);
//                                 });
//                                 break;
//                             case 2:
//                                 readline.question('Enter Path: ', (path) => {
//                                     readline.question('Enter File Name: ', (a) => {
//                                         readline.question('Enter File Content: ', (b) => {
//                                             path = path.endsWith('/') ? path : path + '/';
//                                             create.createFile(path, a, b, readline);
//                                         })
//                                     });
//                                 })
//                                 break;
//                             default:
//                                 console.log('Invalid Input \n');
//                                 create1();
//                                 break;
//                         }
//                     });
//                 }
//             create1();
//             break;

//             case '2':
//                 let read = require('./modules/V1/readAndDisplay');
//                 readline.question('Enter file name: ', (a) => {
//                     read.readFile(a, readline);
//                 });
//                 break;

//             case '3':
//                 let deleteFile = require('./modules/V1/delete');
//                 function delete1() {
//                     const fs = require("fs");
//                     readline.question('What do you want to delete? \nPress 1 for folder and 2 for file: ', (answer) => {
//                         switch (answer) {
//                             case 1:
//                                 readline.question('Enter Folder Name: ', (a) => {
//                                     deleteFile.deleteFolder(a, readline);
//                                 });
//                                 break;
//                             case 2:
//                                 readline.question('Enter Path: ', (path) => {
//                                     readline.question('Enter File Name: ', (a) => {
//                                         readline.question('Enter File Content: ', (b) => {
//                                             path = path.endsWith('/') ? path : path + '/';
//                                             deleteFile.deleteFile(a, b, readline);
//                                         })
//                                     });
//                                 })
//                                 break;
//                             default:
//                                 console.log('Invalid Input');
//                                 delete1();
//                                 break;
//                         }
//                     });
//                 }
//                 delete1();
//                 break;

//             default:
//                 console.log('Invalid input');
//                 yes();
//         }
//     });
// }

// module.exports = { loop }



// // running movies
// // no. fo tickets
// // timing list
// // silver,gold
// // available sets
// // bevrages
// // details print

// let list = ['Jawan', 'Gadar 2', 'Dream Girl 2', 'Kushi', 'Jailer', 'OMG 2', '3 Ekka'];
// list.map((ele, i) => console.log((i + 1) + '.' + ele +'\n'))
// let a=1;
// console.log(list[a-1]);
