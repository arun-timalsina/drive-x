const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const session = require('express-session'); // Required for flash messages
const flash = require('express-flash'); // Flash messages
const { connectToDB } = require('./config/db');
const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');
const fs = require('fs');
const path = require('path');

dotenv.config();

// Connect to MongoDB
connectToDB();

// Create the uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('Uploads directory created:', uploadsDir);
}
// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Use the secret key from environment variables
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.JWT_SECRET, // Use your JWT secret or any random string
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));
app.use(flash()); // Enable flash messages
app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files

// Routes
app.use('/', indexRouter);
app.use('/user', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});