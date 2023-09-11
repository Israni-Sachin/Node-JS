// const { json } = require('express');
const http = require('http');
const qs = require('querystring');
const url = require('url');

function handleRequest(req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log("Request received");
    if (req.method !== 'GET') {
        res.statuscode = 404;
        res.end(http.STATUS_CODES[404])
    }

    const { pathname, query } = url.parse(req.url)
    
    if (pathname === '/') {
        const name = qs.parse(query);
        if (name) {
            console.log(pathname, query);
            res.end(JSON.stringify(name));
        }
        else {
            res.end('Bad Request');
        }
    }
}
http.createServer(handleRequest).listen(3500);