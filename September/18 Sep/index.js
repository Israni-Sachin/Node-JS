const express = require('express');
const app = express();
const port = 1500;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Get request');
});

app.post('/', (req, res) => {
    res.send('Post request');
});

app.put('/', (req, res) => {
    res.send('Put request');
});

app.patch('/', (req, res) => {
    res.send('Patch request');
});

app.delete('/', (req, res) => {
    res.send('Delete request');
});

app.listen(port, console.log(`Server is running on ${port} port`));