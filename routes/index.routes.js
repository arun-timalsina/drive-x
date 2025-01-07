const express = require('express');
const router = express.Router();
const { uploadFileHandler } = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../config/multer');

// Root route
router.get('/', (req, res) => {
  res.render('index');
});

// Home route
router.get('/home', authMiddleware, (req, res) => {
  res.render('home', { user: req.user, message: req.query.message, error: req.query.error });
});

// File upload route (protected by authMiddleware)
router.post('/upload-file', authMiddleware, upload.single('file'), uploadFileHandler);

module.exports = router;