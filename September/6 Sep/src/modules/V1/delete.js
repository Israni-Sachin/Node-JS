let loop = require('../../index.js');

function deleteFile(path,a) {
    const fs = require("fs");
    fs.unlink(path+a, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log(`${a} file deleted successfully!`);
            loop.loop();
        }
    })
}
function deleteFolder(a) {
    const fs = require("fs");
    fs.rmdir(a, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        else {
            console.log(` ${a} folder deleted successfully!`);
            loop.loop();
        }
    });
}
module.exports = { deleteFile, deleteFolder }