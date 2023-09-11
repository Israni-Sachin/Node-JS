
let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = require('./movie_select')
function leta() {
    rl.question('Say something ', (n) => {
        a.nothing(rl);
        rl.question('Let do it ', (m) => {
            // a.something();
        })
    })
}
leta()