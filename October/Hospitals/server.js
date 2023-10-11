const express = require('express');
const app = express();
const port = 3500;
app.use(express.json());

const routes = require('./modules/v1/hospital/Routes');
const loginAuth = require('./modules/v1/hospital/Controllers/logging.controllers')
const verifyToken = require('./middlewares/auth/jwt')

app.use(express.static('c:/Users/sachi/OneDrive/Desktop/Front-End Repository-2/Node-JS/October/src/public'));

app.post('/login', loginAuth)
app.use('/hospital', verifyToken.verifyToken, routes);

app.use('/', (req, res) => {
    res.send({ Status: 404, Message: "Not Found" });
});

app.listen(port, console.log(`Server is running on ${port} port`));