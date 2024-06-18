const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nm = require('nodemailer');
const dotenv = require('dotenv');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// dotenv.config()
// const mongoose = require('mongoose');
// const MONGODB_URI = process.env.MONGODB_URI;


// mongoose.connect(MONGODB_URI, )
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

let savedOtps = {};

app.listen(4000, () => {
console.log("server listening at port 4000");
});

const transporter = nm.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "oneshop982@gmail.com",  
        pass: "rnxy lzbs wjmb iegx"
    }
});

app.post('/sendOtp', (req, res) => {
    let email = req.body.email;
    let digits = '0123456789';
    let limit = 4;
    let otp = "";
    for (let i = 0; i < limit; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    let options = {
        from: "oneshop982@gmail.com",
        to: email,
        subject: "Verification OTP",
        text: "OTP for the application is " + otp,
    };

    transporter.sendMail(options, (err, info) => {
        if (err) {
            res.status(500).send("Couldn't send OTP");
        } else {
            savedOtps[email] = otp;
            setTimeout(() => {
                delete savedOtps[email];  
            }, 50000);
            res.send('OTP sent');
            console.log(savedOtps)
        }
    });
});

app.post('/verify',(req, res) => {
    let otpReceived = req.body.otp;
    let email = req.body.email;
    console.log(savedOtps);
    if (savedOtps[email] === otpReceived) {
        res.send("Verified");
    } else {
        res.status(500).send('Invalid OTP');
    }
});
