const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Register route
router.get('/register', (req, res) => {
  res.render('register', { message: req.flash('message'), error: req.flash('error') });
});

router.post(
  '/register',
  [
    body('username').trim().isLength({ min: 3 }),
    body('email').trim().isEmail().isLength({ min: 13 }),
    body('password').trim().isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      req.flash('error', 'Validation failed. Please check your inputs.');
      return res.redirect('/user/register');
    }

    try {
      const { username, email, password } = req.body;
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
        req.flash('error', 'User already exists.');
        return res.redirect('/user/register');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, email, password: hashedPassword });

      req.flash('message', 'Registration successful. Please log in.');
      res.redirect('/user/login');
    } catch (err) {
      console.error(err);
      req.flash('error', 'Server error. Please try again.');
      res.redirect('/user/register');
    }
  }
);

// Login route
router.get('/login', (req, res) => {
  res.render('login', { message: req.flash('message'), error: req.flash('error') });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      req.flash('error', 'Invalid username or password.');
      return res.redirect('/user/login');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      req.flash('error', 'Invalid username or password.');
      return res.redirect('/user/login');
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token);
    req.flash('message', 'Login successful.');
    res.redirect('/home');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Server error. Please try again.');
    res.redirect('/user/login');
  }
});

module.exports = router;