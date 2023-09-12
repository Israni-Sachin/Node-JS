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

    // if (req.method != 'GET') {
    //     res.end("Not Supportive");
    // }

    let reqData = url.parse(req.url)
    let { pathname } = reqData.pathname
    let { query } = reqData
    let qs = queryString.parse(query)
    // if ((reqData.pathname).endsWith('/user')) {
    //     // res.statusCode = 404;
    //     res.end(JSON.stringify(user))
    //     // res.end(http.STATUS_CODES[404] + 'Not Found')
    // }
    // else if ((reqData.pathname).endsWith('/user/id')) {
    //     let id = user.map(v => v.id)
    //     console.log(id);
    //     res.end(JSON.stringify(id))
    // }
    // else if ((reqData.pathname).endsWith('/user/name')) {
    //     // user.map(v=>console.log(v.id))
    //     res.end(JSON.stringify(user.map(v => v.name)))
    // }
    // else {
    //     res.end("not found")
    // }
    // let id = qs.id
    // for (let i = 0; i < id.length; i++) {
    //     let getID = user.filter(v => v.id.includes(id[i]))
    //     console.log(getID);
    // }
    if (qs.id) {
        let id = qs.id
        console.log(id);
        console.log(id);
        let finalData =[];
        if (Array.isArray(id)) {
            for (let i = 0; i < id.length; i++) {
                let getID = user.find(v => v.id == id[i]);
                finalData.push(getID)
            }
            console.log(finalData);
            res.end(JSON.stringify(finalData))
        }
        else{
            let getID = user.find(v => v.id == id);
            res.end(JSON.stringify(getID));
        }
    }
    else if (qs.name) {
        let name = qs.name
        let getName = user.find(v => v.name == name);
        res.end(JSON.stringify(getName));
    }
    else res.end('NOT FOUND DATA')
    // if (req.method == 'POST') {
    //     let body = '';
    //     req.on('data', (chunk) => {
    //         body += chunk;
    //     })
    //     req.on('end', () => {
    //         console.log(body);
    //     })
    // }
    // console.log(query);
    // console.log(reqData);
    // console.log(pathname);
    // console.log(qs.id);
    // console.log(qs);
    // }
}

http.createServer(handleRequest).listen(3000);

// let arr=[]