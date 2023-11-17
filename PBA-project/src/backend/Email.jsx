const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'myemail',
            pass: 'mypassword'
        }
    });

    const mailOptions = {
        from: 'myemail',
        to: 'email',
        subject: 'New message',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({success: false, error: 'error sending email'});
        } else {
            console.log('email sent:', info.response);
            res.json({success: true, message: 'email sent'});
        }
    });
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});