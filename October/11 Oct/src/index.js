// // const express = require('express');
// // const multer = require('multer');
// // const path = require('path');
// // const app = express();
// // const PORT = 3000;
// // const sendingMail=require('./modules/v1/mail/controllers/sendMail.controllers')

// // // app.set('view engine', 'ejs');
// // // app.set('views', path.resolve('./views'));

// // // const storage = multer.diskStorage({
// // //     destination: function (req, file, cb) {
// // //         return cb(null,"./upload")
// // //     },
// // //     filename: function (req, file, cb) {
// // //         return cb(null,`${Date.now()}-${file.originalname}`);
// // //     }
// // // })

// // // const upload = multer({storage: storage})
// // // app.use(express.urlencoded({ extended: false }));


// // // app.post('/upload',upload.single("img"),(req,res)=>{
// // //     console.log(req.body);    
// // //     console.log(req.file);    
// // // })
// // // app.get('/', (req, res) => {
// // //     return res.render("home")
// // // })

// // app.get('/mail',sendingMail)

// // app.listen(PORT, () => {
// //     console.log(`Server listening on ${PORT} port`);
// // });

// let obj = {
//     prd_id: 1,
//     prd_name: "Sachin",
//     prd_role: "user",
//     prd_age: 36,
//     prdimg_img: false
// }

// let a = Object.keys(obj).filter(ele => ele.includes("prd_"))
// let val = Object.entries(obj)
// let mix = val.filter(ele => ele[0].includes("prd_"));
// let keys = mix.map(ele => ele[0] + " = ?").join();
// console.log(keys);

// a = 10;
// function test(a) {
//     if (a == 10) {
//         console.log('Yaay');
//         return false
//     }
//     if (a > 5) {
//         console.log('Yaaydkfnkd');
//         return false
//     }
// }
// test(a)


let data = {
    prd_qty: 38,
    prd_price: 22000,
    prdimg_img: "hello khana khake jana ho"
}

const product = Object.entries(data);
const prdimg = product.filter(ele => !ele[0].includes("prd_"));
const fields = prdimg.map(ele => ele[0] + " = ?").join();
const values = prd.map(ele => ele[1]);
console.log(product);
// const query = `UPDATE products_img 
//                        SET ${fields} 
//                        WHERE prdimg_prd_id = ${id} `
// const result = db.query(query, values);