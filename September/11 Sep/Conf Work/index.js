const user = [
    {
        id: '1',
        name: 'Sachin'
    },
    {
        id: '2',
        name: 'Pujan'
    },
    {
        id: '3',
        name: 'Bhavik'
    },
]


const http = require('http');
let queryString = require('querystring')
let url = require('url')
function handleRequest(req, res) {
    res.setHeader('Content-Type', 'application/json');

    if (req.method != 'GET') {
        res.end("Not Supportive");
    }

    // else {
    // res.end('API Request Success')
    let reqData = url.parse(req.url)
    let { pathname } = reqData.pathname
    let { query } = reqData
    if ((reqData.pathname).endsWith('/user')) {
        // res.statusCode = 404;
        res.end("not found")
        // res.end(http.STATUS_CODES[404] + 'Not Found')
    }
    if ((reqData.pathname).endsWith('/id')) {
        user.map(v=>console.log(v.id))
    }
    else {
        res.end(JSON.stringify(user))
    }
    // let qs = queryString.parse(query)
    // console.log(query);
    // console.log(reqData);
    // console.log(pathname);
    // console.log(qs);
    // }
}

http.createServer(handleRequest).listen(3000);

// let arr=[]