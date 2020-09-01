var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'omosteven123@gmail.com',
        pass: 'adebomii'
    }
});

var mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>',
    to: 'omosteven123@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    sender: "joshade@gmail.com"
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});