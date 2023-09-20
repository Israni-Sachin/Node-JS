const express = require('express');
const app = express();
const port = 3500;
app.use(express.json());

const routes = require('./Routes');
const loginAuth = require('./Controllers/logging.controllers')
// app.use(reqLogger);

// app.use(logging);

app.post('/login', loginAuth)
app.use('/hospital', routes);

app.use('/', (req, res) => {
    res.send({Status:404, Message:"Not Found"});
});

app.listen(port, console.log(`Server is running on ${port} port`));