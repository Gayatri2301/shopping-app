const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const data = require('./models/data');
const authMiddleware = require('./middleware');
app.use(cors());

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;


mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let savedOtps = {};

app.listen(4000, () => {
  console.log("Server listening at port 4000");
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "oneshop982@gmail.com",
    pass: "rnxy lzbs wjmb iegx"
  }
});

app.post('/sendOtp', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email is required");
  }

  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  const options = {
    from: "oneshop982@gmail.com",
    to: email,
    subject: "Verification OTP",
    text: `OTP for the application is ${otp}`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      return res.status(500).send("Couldn't send OTP");
    }
    savedOtps[email] = otp;
    setTimeout(() => delete savedOtps[email], 50000);
    res.send('OTP sent');
    console.log(savedOtps);
  });
});

app.get('/', (req, res) => {
  res.send("hello");
});

app.post('/verify', (req, res) => {
  const { otp, email } = req.body;
  console.log(savedOtps);
  if (savedOtps[email] === otp) {
    res.send("Verified");
  } else {
    res.status(500).send('Invalid OTP');
  }
});

app.post('/register', async (req, res) => {
  try {
    const { email, firstName, lastName, phone, password, dob, gender, address } = req.body;
    const exist = await data.findOne({ email });
    if (exist) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = password;

    let newUser = new data({
      email, password: hashedPassword, firstName, lastName, phone, dob, gender, address
    });

    await newUser.save();
    res.status(200).send("User successfully registered");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await data.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const isMatch = password === user.password;
    if (!isMatch) {
      return res.status(400).send("Password incorrect");
    }

    const payload = { user: { id: user.id } };

    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Login server error");
  }
});

app.get('/profile', authMiddleware, async (req, res) => {
  try {
    const profile = await data.findById(req.user.id);
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).send("Profile data error");
  }
});

module.exports = app;
