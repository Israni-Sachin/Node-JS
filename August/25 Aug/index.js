// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8080);

// exports.myDateTime = function () {
//     return Date();
// };

const http = require('http');


http.createServer((req, resp) => {
    // resp.writeHead(200, { 'Content-Type': 'application\json' });
    // resp.write(JSON.stringify({ name: "sachin" }));
    resp.write('hello world!');
    resp.end();
}).listen(6000);