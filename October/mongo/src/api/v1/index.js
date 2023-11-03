const express = require('express');
const user = require('../../modules/user/routes/user.routes');
const upload = require('../../modules/upload/upload');

module.exports = () => {
    const api = express.Router();
    user(api)
    upload(api)
    return api;
}

