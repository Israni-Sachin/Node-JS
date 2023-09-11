// let list = ['Jawan', 'Gadar 2', 'Dream Girl 2', 'Kushi', 'Jailer', 'OMG 2', '3 Ekka'];

// function select(movies, name, rl) {
//     if (!movies.includes(name)) {
//         console.log('Please enter correct movie name');
//         again(movies);
//     }
//     else {
//         console.log(name);
//         return name;
//     }
// }

// function again(movies) {
//     for (let i = 0; i < list.length; i++)  console.log((i + 1) + '.' + list[i]);
//     let rl = require('readline').createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     rl.question('Movie Name:', (name) => {
//         select(movies, name, rl);
//     })
// }
// // function again(movies, rl) {
// //     for (let i = 0; i < list.length; i++)  console.log((i + 1) + '.' + list[i]);
// //     rl.question('Movie Name:', (name) => {
// //         if (!movies.includes(name)) {
// //             console.log('Please enter correct movie name');
// //             again(movies, rl);
// //         }
// //         else {
// //             select(movies, name, rl);
// //             rl.close();
// //         }
// //     })
// // }

// module.exports = { select, again }
// let rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


function nothing(rl) {
    rl.question('do you want to continue : ', (ans) => {
        if (ans != 'yes') {
            nothing(rl);
        }
        else {
            console.log(ans);
            rl.close();
        }
    })
}

function something() {
    rl.question('do you want to no : ', (ans) => {
        if (ans != 'no') {
            nothing();
        }
        else {
            console.log(ans);
        }
    })
}










module.exports = { nothing, something }