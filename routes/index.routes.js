const express = require('express');
const router = express.Router();
const { uploadFileHandler, getHomePage, deleteFileHandler } = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../config/multer');

// Root route
router.get('/', (req, res) => {
  res.render('index');
});
// Route for the home page
router.get('/home', authMiddleware, getHomePage);

// Route for file deletion
router.post('/delete-file/:id', authMiddleware, deleteFileHandler);

// Home route
router.get('/home', authMiddleware, (req, res) => {
  res.render('home', { user: req.user, message: req.query.message, error: req.query.error });
});

// File upload route (protected by authMiddleware)
router.post('/upload-file', authMiddleware, upload.single('file'), uploadFileHandler);

// router.post('/user/logout', (req, res) => {
//   // Destroy the session
//   req.session.destroy((err) => {
//     if (err) {
//       console.error('Error destroying session:', err);
//       return res.redirect('/home?error=Failed to logout.');
//     }
//     // Clear the session cookie
//     res.clearCookie('connect.sid'); // 'connect.sid' is the default session cookie name
//     // Redirect to the login page after logout
//     res.redirect('/user/login');
//   });
// });

// Protected routes (require authentication)
router.get('/home', authMiddleware,getHomePage, authMiddleware);
router.post('/upload-file', authMiddleware, upload.single('file'), uploadFileHandler);
router.post('/delete-file/:id', authMiddleware, deleteFileHandler);

// Logout route
router.post('/user/logout', (req, res) => {
  // Clear the JWT token cookie
  res.clearCookie('token');
  // Redirect to the login page after logout
  res.redirect('/user/login');
});

module.exports = router;