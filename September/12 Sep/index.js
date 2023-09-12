let user=[
    {id:1,name:"Sachin",Job:"AI & ML engineer"},
    {id:2,name:"Pujan",Job:"AI & ML engineer"},
    {id:3,name:"Bhavik",Job:"AI & ML engineer"}
]
const http = require('http');
let queryString = require('querystring')
let url = require('url')

function handleRequest(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let reqData = url.parse(req.url)
    let { pathname } = reqData.pathname
    let { query } = reqData
    let qs = queryString.parse(query)

    if (req.method == 'GET') {

        if ((reqData.pathname).endsWith('/user')) {
            res.end(JSON.stringify(user))
        }
        else if (qs.id) {
            let finalData = [];
            if (Array.isArray(qs.id)) {
                for (let i = 0; i < qs.id.length; i++) {
                    let getID = user.find(v => v.id == qs.id[i]);
                    finalData.push(getID)
                }
                res.end(JSON.stringify(finalData))
            }
            else {
                let getID = user.find(v => v.id == qs.id);
                res.end(JSON.stringify(getID));
            }
        }
        else if (qs.name) {
            let finalData = [];
            if (Array.isArray(qs.name)) {
                for (let i = 0; i < qs.name.length; i++) {
                    let getname = user.find(v => v.name == qs.name[i]);
                    finalData.push(getname)
                }
                res.end(JSON.stringify(finalData))
            }
            else {
                let getName = user.find(v => v.name == qs.name);
                res.end(JSON.stringify(getName));
            }
        }
        else res.end('NOT FOUND DATA')
    }
    else if (req.method == 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            let obj = JSON.parse(body);
            user.push(obj);
        })
    }
    else if (req.method == 'PUT') {
        let getID = user.indexOf(user.find(v => v.id == qs.id));
        let body = '';
        req.on('data', (chunk) => body += chunk);
        req.on('end', () => {
            let obj = JSON.parse(body);
            user[getID] = { id: qs.id, ...obj };
            res.end('Updated Successfully');
        });
    }
    else if (req.method == 'PATCH') {
        let getID = user.indexOf(user.find(v => v.id == qs.id));
        let body = '';
        req.on('data', (chunk) => body += chunk);
        req.on('end', () => {
            let obj = JSON.parse(body);
            user[getID] = { ...user[getID], ...obj };
            res.end('Updated Successfully');
        });
    }
    else if (req.method == 'DELETE') {
        user = user.filter(v => v.id != qs.id);
        res.end('Deleted Successfully');
    }
    else {
        res.end('Invalid Request');
    }
}
http.createServer(handleRequest).listen(3000);