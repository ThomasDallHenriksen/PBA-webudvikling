const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config({
    path: 'email.env'
});

const app = express();
const port = 5173;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS
        },
    });

    const mailOptions = {
        to: 'process.env.Email_USER',
        subject: 'New message',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent: ' + info.response);
    } catch (error) {
        res.status(500).send(error.toString());
    }

});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});