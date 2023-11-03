const express = require('express');
const apiRoutes = require('./api/v1');
require('dotenv').config();
const connect = require('./db/db.con')
const cors = require('cors');        
const Post = require('./models/test.model')

const app = express();

const port = process.env.PORT || 3000;
const mongoPORT = 3030;
app.use(cors());
app.use(express.json());

// app.use('/', apiRoutes());

app.get('/', async (req, res) => {
    try {
        Post.findOne({}).then(data => {
            res.json(data);
        }).catch(error => {
            res.json(error);
        });
    } catch (error) {
        res.json(error);
    }
})
app.post('/uploads', async (req, res) => {
    const body = req.body;
    try {
        const newImage = await Post.create(body)
        // newImage.save();
        res.status(200).json({ msg: "image uploaded successfully" })
    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
})






app.use('*', (req, res) => {
    res.status(404).send('404 Not found');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// connect().then(() => {
//     try {
//         app.listen(mongoPORT);
//         console.log(`Server listening on port ${mongoPORT}`);
//     } catch (error) {
//         console.log("Cannot connect to server");
//     }
// }).catch((err) => {
//     console.log("Invalid database connection");
// })