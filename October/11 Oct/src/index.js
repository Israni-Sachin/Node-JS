const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;
const sendingMail=require('./modules/v1/mail/controllers/sendMail.controllers')

// app.set('view engine', 'ejs');
// app.set('views', path.resolve('./views'));

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         return cb(null,"./upload")
//     },
//     filename: function (req, file, cb) {
//         return cb(null,`${Date.now()}-${file.originalname}`);
//     }
// })

// const upload = multer({storage: storage})
// app.use(express.urlencoded({ extended: false }));


// app.post('/upload',upload.single("img"),(req,res)=>{
//     console.log(req.body);    
//     console.log(req.file);    
// })
// app.get('/', (req, res) => {
//     return res.render("home")
// })

app.get('/mail',sendingMail)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT} port`);
});