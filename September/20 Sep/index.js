const express = require('express');
const app = express();
const users=require('./MOCK_DATA.json')

app.get('')
app.use('/',(req,res)=>{
    res.send(users)
})

app.listen(8000,console.log('Server listening on 8000 port'));
