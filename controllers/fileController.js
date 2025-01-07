const File = require('../models/file.model');
const fs = require('fs');
const { uploadFile } = require('../config/db');

const uploadFileHandler = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.redirect('/home?error=No file uploaded.');
    }

    // Ensure req.user is available
    if (!req.user || !req.user.userId) {
      return res.redirect('/user/login?error=You are unauthorized. Please log in.');
    }

    const fileUrl = await uploadFile('uploads', file.path, file.filename);
    if (!fileUrl) {
      return res.redirect('/home?error=File upload failed.');
    }

    const newFile = new File({
      fileName: file.originalname,
      fileUrl,
      userId: req.user.userId,
    });

    await newFile.save();

    // Delete the temporary file
    fs.unlinkSync(file.path);

    res.redirect('/home?message=File uploaded successfully.');
  } catch (err) {
    console.error('Error in uploadFileHandler:', err);
    res.redirect('/home?error=Server error. Please try again.');
  }
};

module.exports = { uploadFileHandler };