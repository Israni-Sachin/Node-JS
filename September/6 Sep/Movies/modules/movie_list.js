const fs = require("fs");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function list() {
    let list = ['Jawan', 'Gadar 2', 'Dream Girl 2', 'Kushi', 'Jailer', 'OMG 2', '3 Ekka'];

    list.map((ele, i) => console.log((i + 1) + '.' + ele + '\n'))

    let as = readline.question("Write number of movie you want to watch: ", (a) => {
        console.log(list[Number(a) - 1]);
        readline.close();
        return list[Number(a) - 1];
    });
    return as;
}

// let movie = list();
// function getMovie(){
//     console.log(movie);
// }

module.exports = { list }

// function list() {
//     return new Promise((res, req) => {
//         let list = ['Jawan', 'Gadar 2', 'Dream Girl 2', 'Kushi', 'Jailer', 'OMG 2', '3 Ekka'];

//         list.map((ele, i) => console.log((i + 1) + '.' + ele + '\n'))

//         readline.question("Write number of movie you want to watch: ", (a) => {
//             // console.log(list[Number(a) - 1]);
//             return list[Number(a) - 1];
//         });
//     })

// }
// function get(a) {
//     return new Promise((res, req) => {
//         console.log(a);
//     })
// }

// async function asd(){
//     let a=await list();
//     console.log(a);
//     await get();
// }

// asd();


