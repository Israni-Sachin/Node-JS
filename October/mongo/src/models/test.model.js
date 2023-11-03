const mongoose = require('mongoose');

const other = new mongoose.Schema({
    company: {
        type: "string",
        required: true
    },
    duration: {
        type: "string",
        required: true
    }

}, { _id: false });

const users = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    age: {
        type: "number",
        required: true
    },
    hobbies: {
        type: "string",
        required: true
    },
    experience: {
        type: [other],
        required: true
    }
});

const postSchema = new mongoose.Schema({
    myFile: String
});

module.exports =  mongoose.model('Post', postSchema);