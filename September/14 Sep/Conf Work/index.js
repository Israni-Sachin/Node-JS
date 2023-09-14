// function mainFunction(callback) {
//     console.log("Performing operation...");
//     // Use setTimeout to simulate an asynchronous operation
//     setTimeout(function () {
//         callback("Operation complete");
//     }, 1000);
// }

// // Define the callback function
// function callbackFunction(result) {
//     console.log("Result: " + result);
// }

// // Call the main function with the callback function
// mainFunction(callbackFunction);

// import { Express } from "express";
let user = [
    { id: 1, name: "Sachin", Job: "AI & ML engineer" },
    { id: 2, name: "Pujan", Job: "AI & ML engineer" },
    { id: 3, name: "Bhavik", Job: "AI & ML engineer" }
]

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get('/user', function (req, res) {
    res.json(user);
})

app.get('/user/:userId', function (req, res) {

    let userId = req.params.userId

    let getData = user.find(users => users.id == userId)

    if (getData) {
        res.status(200).json({ status: 200, message: 'OK', data: getData })
    }

    else res.status(404).json({ status: 404, message: `User not found` })
});

app.post('/user', (req, res) => {
    body = req.body;
    if (body){
        obj = { id: user.length + 1, ...body }
        obj.id = user.length + 1
        res.status(200).json({ status: 200, message: 'OK', data: obj });    
        user.push(obj);
    }
    else res.status(404).json({ status: 404, message:'Not Updated'});
})

app.put('/user/:userId', (req, res) => {
    body = req.body;
    let userId = req.params.userId
    let getIDindex = user.indexOf(user.find(v => v.id == userId));
    obj = { id: userId, ...body }
    obj.id = userId;
    user[getIDindex] = obj
});

app.patch('/user/:userId', (req, res) => {
    let userId = req.params.userId
    body = req.body;
    let getIDindex = user.indexOf(user.find(val => val.id == userId))
    obj = { ...user[getIDindex], ...body }
    obj.id = userId;
    user[getIDindex] = obj
});

app.delete('/user/:userId', (req, res) => {
    let userId = req.params.userId
    user = user.filter(v => v.id != userId);

});

app.use('/', function (req, res) {
    res.send('Welcome to express!');
});

app.listen(port, () => console.log(`Serving running on ${port} port`))
