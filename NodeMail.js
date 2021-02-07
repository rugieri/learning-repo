const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youaremail@gmail.com',
        pass: 'yourpassword'
    }
});

const mailOptions ={
    form: 'youaremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);

    } else {
        console.log('Email sent:' + info.response)
    }
});
