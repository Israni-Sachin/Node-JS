function readFile(a) {
    const fs = require('fs');
    fs.readFile(a, (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(data.toString());
            let loop = require('../../index.js');
            loop.loop();
        }
    })
}
module.exports = { readFile };