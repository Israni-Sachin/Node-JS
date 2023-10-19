const nodemailer = require('nodemailer');

const sendingMail = async (req,res) => {

    let testAccount = await nodemailer.createTestAccount();


    let transporter = await nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        // port: 587,
        service:'Gmail',
        auth: {
            user: 'sachinisrani56@gmail.com',
            pass: 'dswybebiylysnlma'
        }
    })

    const info = await transporter.sendMail({
        from: 'sachinisrani56@gmail.com', // sender address
        to: " bhaumik.panchal@saeculumsolutions.com", // list of receivers
        subject: "Your OTP IS", // Subject line
        html: "<b>875421</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    res.json(info)
}
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'youremail@gmail.com',
//         pass: 'yourpassword'
//     }
// });

// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

module.exports = sendingMail