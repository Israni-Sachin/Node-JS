const express = require('express');
const app = express();
const Joi = require('joi');
require('dotenv').config();

// ----------------------- imports --------------------------------

const apiRoutes = require('./api/v1/index');

// --------------------------- API ------------------------

app.use(express.json());

app.use('/', apiRoutes());


app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${process.env.PORT} port`);
});