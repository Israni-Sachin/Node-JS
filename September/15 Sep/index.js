const fs = require('fs');

let data='Hello world!';

// fs.writeFile('./hey.txt',data,function(err){
//     if(err) {
//         console.log(err);
//     }
//     console.log("Success!");
// })

// fs.readFile('./hey.txt',function(err, data){
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

fs.appendFile('./hey.txt',data,(err)=>{
    if(err) {
        console.log(err);
    }
    console.log('Success!');
})
