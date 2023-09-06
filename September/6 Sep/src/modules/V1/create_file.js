let loop = require('../../index.js');
const fs = require("fs");
function createFile(path,a, b) {
    fs.writeFile(path+a, b, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('File Created');
            loop.loop();
        }
    })
}
function createFolder(a) {
    fs.mkdir(a, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        else {
            console.log('Directory created successfully!');
            loop.loop();
        }
    });
}

module.exports = { createFile, createFolder }
