const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first numbers: ', (a) => {
    readline.question('Enter second numbers: ', (b) => {
        a = Number(a);
        b = Number(b);
        console.log(`The difference of ${a} and ${b} is ${a - b}`);
        readline.close();
    })
});