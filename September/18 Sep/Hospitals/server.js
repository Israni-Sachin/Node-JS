const express = require('express');
const app = express();
const port = 3500;
app.use(express.json());

const routes = require('./Routes');
const reqLogger = require('./middlewares/req.middleware');
const logging = require('./middlewares/logging.middleware');

app.use(reqLogger);

app.use(logging);

app.use('/hospital', routes);

app.use('/', (req, res) => {
    res.send('Welcome to express');
});

app.listen(port, console.log(`Server is running on ${port} port`));