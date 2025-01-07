// // // // const File = require('../models/file.model');
// // // // const fs = require('fs');
// // // // const { uploadFile } = require('../config/db');

// // // // const uploadFileHandler = async (req, res) => {
// // // //   try {
// // // //     const file = req.file;
// // // //     if (!file) {
// // // //       return res.redirect('/home');
// // // //     }

// // // //     // Ensure req.user is available
// // // //     if (!req.user || !req.user.userId) {
// // // //       return res.redirect('/user/login');
// // // //     }

// // // //     const fileUrl = await uploadFile('uploads', file.path, file.filename);
// // // //     if (!fileUrl) {
// // // //       return res.redirect('/home');
// // // //     }

// // // //     const newFile = new File({
// // // //       fileName: file.originalname,
// // // //       fileUrl,
// // // //       userId: req.user.userId,
// // // //     });

// // // //     await newFile.save();

// // // //     // Delete the temporary file
// // // //     fs.unlinkSync(file.path);

// // // //     res.redirect('/home');
// // // //   } catch (err) {
// // // //     console.error('Error in uploadFileHandler:', err);
// // // //     res.redirect('/home');
// // // //   }
// // // // };

// // // // module.exports = { uploadFileHandler };



// // // // const File = require('../models/file.model');
// // // // const fs = require('fs');
// // // // const { uploadFile } = require('../config/db');

// // // // const uploadFileHandler = async (req, res) => {
// // // //   try {
// // // //     const file = req.file;

// // // //     // Validate file
// // // //     if (!file) {
// // // //       return res.status(400).json({ error: 'No file uploaded.' });
// // // //     }

// // // //     // Validate user
// // // //     if (!req.user || !req.user.userId) {
// // // //       return res.status(401).json({ error: 'Unauthorized. Please log in.' });
// // // //     }

// // // //     // Upload file to storage
// // // //     const fileUrl = await uploadFile('uploads', file.path, file.filename);
// // // //     if (!fileUrl) {
// // // //       return res.status(500).json({ error: 'Failed to upload file.' });
// // // //     }


  
// // //   //const fileExtension = path.extname(file.originalname); // Get the file extension
// // //   //const customFileName = `${username}${fileExtension}`; // Combine username and extension

// // //   // const fileUrl = await uploadFile('uploads', file.path, customFileName);
// // //   // if (!fileUrl) {
// // //   //   return res.status(500).json({ error: 'Failed to upload file.' });
// // //   // }



// // // //     // Save file metadata to database
// // // //     const newFile = new File({
// // // //       fileName: file.originalname,
// // // //       fileUrl,
// // // //       fileSize: file.size,
// // // //       userId: req.user.userId,
// // // //       uploadDate: new Date(),

// // // //     });

// // // //     await newFile.save();

// // // //     // Delete temporary file
// // // //     fs.unlink(file.path, (err) => {
// // // //       if (err) {
// // // //         console.error('Error deleting temporary file:', err);
// // // //       }
// // // //     });


// // // //     // Return success response

    
// // // //     const status = res.status(201).json({ message: 'File uploaded successfully.', fileUrl });
// // // //   } catch (err) {
// // // //     console.error('Error in uploadFileHandler:', err);
// // // //     res.status(500).json({ error: 'Internal server error.' });
// // // //   }
// // // // };



// // // // module.exports = { uploadFileHandler };


// // // // const File = require('../models/file.model');
// // // // const fs = require('fs');
// // // // const { uploadFile } = require('../config/db');
// // // // const sanitize = require('sanitize-filename');

// // // // const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
// // // // const maxFileSize = 5 * 1024 * 1024; // 5MB

// // // // const uploadFileHandler = async (req, res) => {
// // // //   try {
// // // //     const file = req.file;

// // // //     // Validate file
// // // //     if (!file) {
// // // //       return res.status(400).json({ error: 'No file uploaded.' });
// // // //     }

// // // //     // Validate file type
// // // //     if (!allowedFileTypes.includes(file.mimetype)) {
// // // //       return res.status(400).json({ error: 'Invalid file type. Only JPEG, PNG, and PDF files are allowed.' });
// // // //     }

// // // //     // Validate file size
// // // //     if (file.size > maxFileSize) {
// // // //       return res.status(400).json({ error: 'File size exceeds the maximum limit of 5MB.' });
// // // //     }

// // // //     // Validate user
// // // //     if (!req.user || !req.user.userId) {
// // // //       return res.status(401).json({ error: 'Unauthorized. Please log in.' });
// // // //     }

// // // //     // Upload file to storage
// // // //     const fileUrl = await uploadFile('uploads', file.path, file.filename);
// // // //     if (!fileUrl) {
// // // //       return res.status(500).json({ error: 'Failed to upload file.' });
// // // //     }

// // // //     // Sanitize file name
// // // //     const safeFileName = sanitize(file.originalname);

// // // //     // Save file metadata to database
// // // //     const newFile = new File({
// // // //       fileName: safeFileName,
// // // //       fileUrl,
// // // //       fileSize: file.size,
// // // //       userId: req.user.userId,
// // // //       uploadDate: new Date(),
// // // //     });

// // // //     await newFile.save();

// // // //     // Delete temporary file
// // // //     fs.unlink(file.path, (err) => {
// // // //       if (err) {
// // // //         console.error('Error deleting temporary file:', err);
// // // //       }
// // // //     });

// // // //     // Return success response
// // // //     res.status(201).json({ message: 'File uploaded successfully.', fileUrl });
// // // //   } catch (err) {
// // // //     console.error('Error in uploadFileHandler:', err);
// // // //     res.status(500).json({ error: 'Internal server error.' });
// // // //   }
// // // // };

// // // // module.exports = { uploadFileHandler };



// // // const File = require('../models/file.model');
// // // const fs = require('fs');
// // // const { uploadFile } = require('../config/db');
// // // const sanitize = require('sanitize-filename');
// // // const path = require('path');

// // // const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
// // // const maxFileSize = 5 * 1024 * 1024; // 5MB

// // // const uploadFileHandler = async (req, res) => {
// // //   try {
// // //     const file = req.file;

// // //     // Validate file
// // //     if (!file) {
// // //       return res.status(400).json({ error: 'No file uploaded.' });
// // //     }

// // //     // Validate file type
// // //     if (!allowedFileTypes.includes(file.mimetype)) {
// // //       return res.status(400).json({ error: 'Invalid file type. Only JPEG, PNG, and PDF files are allowed.' });
// // //     }

// // //     // Validate file size
// // //     if (file.size > maxFileSize) {
// // //       return res.status(400).json({ error: 'File size exceeds the maximum limit of 5MB.' });
// // //     }

// // //     // Validate user
// // //     if (!req.user || !req.user.userId || !req.user.username) {
// // //       return res.status(401).json({ error: 'Unauthorized. Please log in.' });
// // //     }

// // //     // Generate a custom filename using the username
// // //     const username = sanitize(req.user.username); // Sanitize the username
// // //     const fileExtension = path.extname(file.originalname); // Get the file extension
// // //     const customFileName = `${username}${fileExtension}`; // Combine username and extension

// // //     // Upload file to storage with the custom filename
// // //     const fileUrl = await uploadFile('uploads', file.path, customFileName);
// // //     if (!fileUrl) {
// // //       return res.status(500).json({ error: 'Failed to upload file.' });
// // //     }

// // //     // Save file metadata to database
// // //     const newFile = new File({
// // //       fileName: customFileName, // Save the custom filename
// // //       fileUrl,
// // //       fileSize: file.size,
// // //       userId: req.user.userId,
// // //       uploadDate: new Date(),
// // //     });

// // //     await newFile.save();

// // //     // Delete temporary file
// // //     fs.unlink(file.path, (err) => {
// // //       if (err) {
// // //         console.error('Error deleting temporary file:', err);
// // //       }
// // //     });

// // //     // Return success response
// // //     res.status(201).json({ message: 'File uploaded successfully.', fileUrl });
// // //   } catch (err) {
// // //     console.error('Error in uploadFileHandler:', err);
// // //     res.status(500).json({ error: 'Internal server error.' });
// // //   }
// // // };

// // // module.exports = { uploadFileHandler };


// // // const File = require('../models/file.model');
// // // const fs = require('fs');
// // // const { uploadFile } = require('../config/db');

// // // const uploadFileHandler = async (req, res) => {
// // //   try {
// // //     const file = req.file;
// // //     if (!file) {
// // //       return res.redirect('/home');
// // //     }

// // //     // Ensure req.user is available
// // //     if (!req.user || !req.user.userId) {
// // //       return res.redirect('/user/login');
// // //     }

// // //     const fileUrl = await uploadFile('uploads', file.path, file.filename);
// // //     if (!fileUrl) {
// // //       return res.redirect('/home');
// // //     }

// // //     const newFile = new File({
// // //       fileName: file.originalname,
// // //       fileUrl,
// // //       userId: req.user.userId,
// // //     });

// // //     await newFile.save();

// // //     // Delete the temporary file
// // //     fs.unlinkSync(file.path);

// // //     res.redirect('/home');
// // //   } catch (err) {
// // //     console.error('Error in uploadFileHandler:', err);
// // //     res.redirect('/home');
// // //   }
// // // };

// // // module.exports = { uploadFileHandler };



// // // const File = require('../models/file.model');
// // // const fs = require('fs');
// // // const { uploadFile } = require('../config/db');

// // // const uploadFileHandler = async (req, res) => {
// // //   try {
// // //     const file = req.file;

// // //     // Validate file
// // //     if (!file) {
// // //       return res.status(400).json({ error: 'No file uploaded.' });
// // //     }

// // //     // Validate user
// // //     if (!req.user || !req.user.userId) {
// // //       return res.status(401).json({ error: 'Unauthorized. Please log in.' });
// // //     }

// // //     // Upload file to storage
// // //     const fileUrl = await uploadFile('uploads', file.path, file.filename);
// // //     if (!fileUrl) {
// // //       return res.status(500).json({ error: 'Failed to upload file.' });
// // //     }

// // //     // Save file metadata to database
// // //     const newFile = new File({
// // //       fileName: file.originalname,
// // //       fileUrl,
// // //       fileSize: file.size,
// // //       userId: req.user.userId,
// // //       uploadDate: new Date(),

// // //     });

// // //     await newFile.save();

// // //     // Delete temporary file
// // //     fs.unlink(file.path, (err) => {
// // //       if (err) {
// // //         console.error('Error deleting temporary file:', err);
// // //       }
// // //     });


// // //     // Return success response

    
// // //     const status = res.status(201).json({ message: 'File uploaded successfully.', fileUrl });
// // //   } catch (err) {
// // //     console.error('Error in uploadFileHandler:', err);
// // //     res.status(500).json({ error: 'Internal server error.' });
// // //   }
// // // };



// // // module.exports = { uploadFileHandler };


// // // const File = require('../models/file.model');
// // // const path = require('path');
// // // const fs = require('fs');
// // // const { uploadFile } = require('../config/db');

// // // const uploadFileHandler = async (req, res) => {
// // //   try {
// // //     const file = req.file;
// // //     if (!file) {
// // //       return res.redirect('/home?error=No file uploaded.');
// // //     }

// // //     // Ensure req.user is available
// // //     if (!req.user || !req.user.userId || !req.user.username) {
// // //       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
// // //     }

// // //     // Use the username as the file name for Supabase upload
// // //     const username = req.user.username;
// // //     const fileExtension = path.extname(file.originalname); // Get the file extension (e.g., .jpg)
// // //     const fileName = `${username}${fileExtension}`; // Rename the file to username + extension

// // //     const fileUrl = await uploadFile('uploads', file.path, fileName);
// // //     if (!fileUrl) {
// // //       return res.redirect('/home?error=File upload failed.');
// // //     }

// // //     // Save the file metadata in MongoDB with the username as the file name
// // //     const newFile = new File({
// // //       fileName: fileName, // Use the username.extension format
// // //       fileUrl,
// // //       userId: req.user.userId,
// // //     });

// // //     await newFile.save();

// // //     // Delete the temporary file
// // //     fs.unlinkSync(file.path);

// // //     res.redirect('/home?message=File uploaded successfully.');
// // //   } catch (err) {
// // //     console.error('Error in uploadFileHandler:', err);
// // //     res.redirect('/home?error=Server error. Please try again.');
// // //   }
// // // };
// // // // const uploadFileHandler = async (req, res) => {
// // // //   try {
// // // //     const file = req.file;
// // // //     if (!file) {
// // // //       return res.redirect('/home?error=No file uploaded.');
// // // //     }

// // // //     // Ensure req.user is available
// // // //     if (!req.user || !req.user.userId) {
// // // //       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
// // // //     }

// // // //     const fileUrl = await uploadFile('uploads', file.path, file.filename);
// // // //     if (!fileUrl) {
// // // //       return res.redirect('/home?error=File upload failed.');
// // // //     }

// // // //     const newFile = new File({
// // // //       fileName: file.originalname,
// // // //       fileUrl,
// // // //       userId: req.user.userId,
// // // //     });

// // // //     await newFile.save();

// // // //     // Delete the temporary file
// // // //     fs.unlinkSync(file.path);

// // // //     res.redirect('/home?message=File uploaded successfully.');
// // // //   } catch (err) {
// // // //     console.error('Error in uploadFileHandler:', err);
// // // //     res.redirect('/home?error=Server error. Please try again.');
// // // //   }
// // // // };

// // // module.exports = { uploadFileHandler };


// // const fs = require('fs');
// // const path = require('path');
// // // const { uploadFile } = require('../config/db');
// // // const File = require('../models/file.model');
// // // const { upload } = require('../config/multer');

// // // const uploadFileHandler = async (req, res) => {
// // //   try {
// // //     const file = req.file;
// // //     if (!file) {
// // //       return res.redirect('/home?error=No file uploaded.');
// // //     }

// // //     // Ensure req.user is available
// // //     if (!req.user || !req.user.userId || !req.user.username) {
// // //       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
// // //     }

// // //     const username = req.user.username;
// // //     const fileExtension = path.extname(file.originalname); // Get the file extension (e.g., .jpg)
// // //     const baseFileName = `${username}${fileExtension}`; // Base file name (e.g., arun.jpg)

// // //     // Function to generate a unique file name
// // //     const generateUniqueFileName = async (baseName, counter = 0) => {
// // //       const newFileName = counter === 0 ? baseName : `${username}(${counter})${fileExtension}`;

// // //       // Check if a file with the same name already exists in MongoDB
// // //       const existingFile = await File.findOne({ fileName: newFileName });
// // //       if (existingFile) {
// // //         return generateUniqueFileName(baseName, counter + 1); // Increment the counter and try again
// // //       }
// // //       return newFileName;
// // //     };

// // //     // Generate a unique file name
// // //     const uniqueFileName = await generateUniqueFileName(baseFileName);

// // //     // Upload the file to Supabase with the unique file name
// // //     const fileUrl = await uploadFile('uploads', file.path, uniqueFileName);
// // //     if (!fileUrl) {
// // //       return res.redirect('/home?error=File upload failed.');
// // //     }

// // //     // Save the file metadata in MongoDB with the unique file name
// // //     const newFile = new File({
// // //       fileName: uniqueFileName, // Use the unique file name
// // //       fileUrl,
// // //       userId: req.user.userId,
// // //     });

// // //     await newFile.save();

// // //     // Delete the temporary file
// // //     fs.unlinkSync(file.path);

// // //     res.redirect('/home?message=File uploaded successfully.');
// // //   } catch (err) {
// // //     console.error('Error in uploadFileHandler:', err);
// // //     res.redirect('/home?error=Server error. Please try again.');
// // //   }
// // // };
// // // const getUploadedFiles = async (req, res) => {
// // //   try {
// // //     // Ensure req.user is available
// // //     if (!req.user || !req.user.userId) {
// // //       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
// // //     }

// // //     // Fetch all files for the logged-in user
// // //     const files = await File.find({ userId: req.user.userId });

// // //     // Render the files in the frontend
// // //     res.render('uploads', { files }); // Assuming you're using a templating engine like EJS
// // //   } catch (err) {
// // //     console.error('Error fetching uploaded files:', err);
// // //     res.redirect('/home?error=Server error. Please try again.');
// // //   }
// // // };

// // // module.exports = { uploadFileHandler, getUploadedFiles };
// // // // module.exports = { uploadFileHandler };


// // const File = require('../models/file.model');
// // const { uploadFile,supabase} = require('../config/db');

// // // Function to handle file uploads
// // const uploadFileHandler = async (req, res) => {
// //   try {
// //     const file = req.file;
// //     if (!file) {
// //       return res.redirect('/home?error=No file uploaded.');
// //     }

// //     // Ensure req.user is available
// //     if (!req.user || !req.user.userId || !req.user.username) {
// //       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
// //     }

// //     // Use the username as the file name for Supabase upload
// //     const username = req.user.username;
// //     const fileExtension = path.extname(file.originalname); // Get the file extension (e.g., .jpg)
// //     const fileName = file.filename; // Use the unique file name generated by Multer

// //     const fileUrl = await uploadFile('uploads', file.path, fileName);
// //     if (!fileUrl) {
// //       return res.redirect('/home?error=File upload failed.');
// //     }

// //     // Save the file metadata in MongoDB with the unique file name
// //     const newFile = new File({
// //       fileName: fileName, // Use the unique file name
// //       fileUrl,
// //       userId: req.user.userId,
// //     });

// //     await newFile.save();

// //     // Delete the temporary file
// //     fs.unlinkSync(file.path);

// //     res.redirect('/home?message=File uploaded successfully.');
// //   } catch (err) {
// //     console.error('Error in uploadFileHandler:', err);
// //     res.redirect('/home?error=Server error. Please try again.');
// //   }
// // };

// // // Function to fetch uploaded files and render the home page
// // const getHomePage = async (req, res) => {
// //   try {
// //     // Ensure req.user is available
// //     if (!req.user || !req.user.userId) {
// //       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
// //     }

// //     // Fetch all files for the logged-in user
// //     const files = await File.find({ userId: req.user.userId });

// //     // Render the home page with the files
// //     res.render('home', { user: req.user, files, message: req.query.message, error: req.query.error });
// //   } catch (err) {
// //     console.error('Error fetching uploaded files:', err);
// //     res.redirect('/home?error=Server error. Please try again.');
// //   }
// // };



// // // const fs = require('fs');
// // // const path = require('path');
// // // const { uploadFile, supabase } = require('../config/db');
// // // const File = require('../models/file.model');

// // // // Function to handle file uploads
// // // const uploadFileHandler = async (req, res) => {
// // //   try {
// // //     const file = req.file;
// // //     if (!file) {
// // //       return res.redirect('/home?error=No file uploaded.');
// // //     }

// // //     // Ensure req.user is available
// // //     if (!req.user || !req.user.userId || !req.user.username) {
// // //       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
// // //     }

// // //     // Use the username as the file name for Supabase upload
// // //     const username = req.user.username;
// // //     const fileExtension = path.extname(file.originalname); // Get the file extension (e.g., .jpg)
// // //     const fileName = file.filename; // Use the unique file name generated by Multer

// // //     const fileUrl = await uploadFile('uploads', file.path, fileName);
// // //     if (!fileUrl) {
// // //       return res.redirect('/home?error=File upload failed.');
// // //     }

// // //     // Save the file metadata in MongoDB with the unique file name
// // //     const newFile = new File({
// // //       fileName: fileName, // Use the unique file name
// // //       fileUrl,
// // //       userId: req.user.userId,
// // //     });

// // //     await newFile.save();

// // //     // Delete the temporary file
// // //     fs.unlinkSync(file.path);

// // //     res.redirect('/home?message=File uploaded successfully.');
// // //   } catch (err) {
// // //     console.error('Error in uploadFileHandler:', err);
// // //     res.redirect('/home?error=Server error. Please try again.');
// // //   }
// // // };

// // // // Function to fetch uploaded files and render the home page
// // // const getHomePage = async (req, res) => {
// // //   try {
// // //     // Ensure req.user is available
// // //     if (!req.user || !req.user.userId) {
// // //       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
// // //     }

// // //     // Fetch all files for the logged-in user
// // //     const files = await File.find({ userId: req.user.userId });

// // //     // Render the home page with the files
// // //     res.render('home', { user: req.user, files, message: req.query.message, error: req.query.error });
// // //   } catch (err) {
// // //     console.error('Error fetching uploaded files:', err);
// // //     res.redirect('/home?error=Server error. Please try again.');
// // //   }
// // // };

// // // Function to delete a file
// // const deleteFileHandler = async (req, res) => {
// //   try {
// //     const fileId = req.params.id;

// //     // Find the file in MongoDB
// //     const file = await File.findById(fileId);
// //     if (!file) {
// //       return res.redirect('/home?error=File not found.');
// //     }

// //     // Ensure the file belongs to the logged-in user
// //     if (file.userId.toString() !== req.user.userId) {
// //       return res.redirect('/home?error=You are unauthorized to delete this file.');
// //     }

// //     // Delete the file from Supabase Storage
// //     const fileName = file.fileName;
// //     const { error } = await supabase.storage.from('uploads').remove([fileName]);
// //     if (error) {
// //       console.error('Supabase delete error:', error);
// //       return res.redirect('/home?error=Failed to delete file from storage.');
// //     }

// //     // Delete the file metadata from MongoDB
// //     await File.findByIdAndDelete(fileId);

// //     res.redirect('/home?message=File deleted successfully.');
// //   } catch (err) {
// //     console.error('Error in deleteFileHandler:', err);
// //     res.redirect('/home?error=Server error. Please try again.');
// //   }
// // };

// // // Function to delete a file
// // const deleteFileHandler = async (req, res) => {
// //   try {
// //     const fileId = req.params.id;

// //     // Find the file in MongoDB
// //     const file = await File.findById(fileId);
// //     if (!file) {
// //       return res.redirect('/home?error=File not found.');
// //     }
// //     // Ensure the file belongs to the logged-in user
// //     if (file.userId.toString() !== req.user.userId) {
// //       return res.redirect('/home?error=You are unauthorized to delete this file.');
// //     }

// //     // Delete the file from Supabase Storage
// //     const fileName = file.fileName;
// //     const { error } = await supabase.storage.from('uploads').remove([fileName]);
// //     if (error) {
// //       console.error('Supabase delete error:', error);
// //       return res.redirect('/home?error=Failed to delete file from storage.');
// //     }

// //     // Delete the file metadata from MongoDB
// //     await File.findByIdAndDelete(fileId);

// //     res.redirect('/home?message=File deleted successfully.');
// //   } catch (err) {
// //     console.error('Error in deleteFileHandler:', err);
// //     res.redirect('/home?error=Server error. Please try again.');
// //   }
// // };

// // module.exports = { uploadFileHandler, getHomePage, deleteFileHandler };


// const fs = require('fs');
// const path = require('path');
// const { uploadFile, supabase } = require('../config/db');
// const File = require('../models/file.model');

// // Function to handle file uploads
// const uploadFileHandler = async (req, res) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       return res.redirect('/home?error=No file uploaded.');
//     }

//     // Ensure req.user is available
//     if (!req.user || !req.user.userId || !req.user.username) {
//       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
//     }

//     // Use the username as the file name for Supabase upload
//     const username = req.user.username;
//     const fileExtension = path.extname(file.originalname); // Get the file extension (e.g., .jpg)
//     const fileName = file.filename; // Use the unique file name generated by Multer

//     const fileUrl = await uploadFile('uploads', file.path, fileName);
//     if (!fileUrl) {
//       return res.redirect('/home?error=File upload failed.');
//     }

//     // Save the file metadata in MongoDB with the unique file name
//     const newFile = new File({
//       fileName: fileName, // Use the unique file name
//       fileUrl,
//       userId: req.user.userId,
//     });

//     await newFile.save();

//     // Delete the temporary file
//     fs.unlinkSync(file.path);

//     res.redirect('/home?message=File uploaded successfully.');
//   } catch (err) {
//     console.error('Error in uploadFileHandler:', err);
//     res.redirect('/home?error=Server error. Please try again.');
//   }
// };

// // Function to fetch uploaded files and render the home page
// const getHomePage = async (req, res) => {
//   try {
//     // Ensure req.user is available
//     if (!req.user || !req.user.userId) {
//       return res.redirect('/user/login?error=You are unauthorized. Please log in.');
//     }

//     // Fetch all files for the logged-in user
//     const files = await File.find({ userId: req.user.userId });

//     // Render the home page with the files
//     res.render('home', { user: req.user, files, message: req.query.message, error: req.query.error });
//   } catch (err) {
//     console.error('Error fetching uploaded files:', err);
//     res.redirect('/home?error=Server error. Please try again.');
//   }
// };

// // Function to delete a file
// const deleteFileHandler = async (req, res) => {
//   try {
//     const fileId = req.params.id;

//     // Find the file in MongoDB
//     const file = await File.findById(fileId);
//     if (!file) {
//       return res.redirect('/home?error=File not found.');
//     }

//     // Ensure the file belongs to the logged-in user
//     if (file.userId.toString() !== req.user.userId) {
//       return res.redirect('/home?error=You are unauthorized to delete this file.');
//     }

//     // Delete the file from Supabase Storage
//     const fileName = file.fileName;
//     const { error } = await supabase.storage.from('uploads').remove([fileName]);
//     if (error) {
//       console.error('Supabase delete error:', error);
//       return res.redirect('/home?error=Failed to delete file from storage.');
//     }

//     // Delete the file metadata from MongoDB
//     await File.findByIdAndDelete(fileId);

//     res.redirect('/home?message=File deleted successfully.');
//   } catch (err) {
//     console.error('Error in deleteFileHandler:', err);
//     res.redirect('/home?error=Server error. Please try again.');
//   }
// };

// module.exports = { uploadFileHandler, getHomePage, deleteFileHandler };


const fs = require('fs');
const path = require('path');
const { uploadFile, supabase } = require('../config/db');
const File = require('../models/file.model');

// Function to handle file uploads
const uploadFileHandler = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.redirect('/home?error=No file uploaded.');
    }

    // Ensure req.user is available
    if (!req.user || !req.user.userId || !req.user.username) {
      return res.redirect('/user/login?error=You are unauthorized. Please log in.');
    }

    const username = req.user.username;
    const fileExtension = path.extname(file.originalname); // Get the file extension (e.g., .jpg)
    const baseFileName = `${username}${fileExtension}`; // Base file name (e.g., arun.jpg)

    // Function to generate a unique file name
    const generateUniqueFileName = async (baseName, counter = 0) => {
      const newFileName = counter === 0 ? baseName : `${username}(${counter})${fileExtension}`;

      // Check if a file with the same name already exists in MongoDB
      const existingFile = await File.findOne({ fileName: newFileName });
      if (existingFile) {
        return generateUniqueFileName(baseName, counter + 1); // Increment the counter and try again
      }
      return newFileName;
    };

    // Generate a unique file name
    const uniqueFileName = await generateUniqueFileName(baseFileName);

    // Upload the file to Supabase with the unique file name
    const fileUrl = await uploadFile('uploads', file.path, uniqueFileName);
    if (!fileUrl) {
      return res.redirect('/home?error=File upload failed.');
    }

    // Save the file metadata in MongoDB with the unique file name
    const newFile = new File({
      fileName: uniqueFileName, // Use the unique file name
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

// Function to fetch uploaded files and render the home page
const getHomePage = async (req, res) => {
  try {
    // Ensure req.user is available
    if (!req.user || !req.user.userId) {
      return res.redirect('/user/login?error=You are unauthorized. Please log in.');
    }

    // Fetch all files for the logged-in user
    const files = await File.find({ userId: req.user.userId });

    // Render the home page with the files
    res.render('home', { user: req.user, files, message: req.query.message, error: req.query.error });
  } catch (err) {
    console.error('Error fetching uploaded files:', err);
    res.redirect('/home?error=Server error. Please try again.');
  }
};

// Function to delete a file
const deleteFileHandler = async (req, res) => {
  try {
    const fileId = req.params.id;

    // Find the file in MongoDB
    const file = await File.findById(fileId);
    if (!file) {
      return res.redirect('/home?error=File not found.');
    }

    // Ensure the file belongs to the logged-in user
    if (file.userId.toString() !== req.user.userId) {
      return res.redirect('/home?error=You are unauthorized to delete this file.');
    }

    // Delete the file from Supabase Storage
    const fileName = file.fileName;
    console.log('Deleting file from Supabase:', fileName); // Log the file name

    const { data, error } = await supabase.storage.from('uploads').remove([fileName]);
    if (error) {
      console.error('Supabase delete error:', error); // Log the full error
      return res.redirect('/home?error=Failed to delete file from storage.');
    }

    console.log('Supabase delete response:', data); // Log the response

    // Delete the file metadata from MongoDB
    await File.findByIdAndDelete(fileId);

    res.redirect('/home?message=File deleted successfully.');
  } catch (err) {
    console.error('Error in deleteFileHandler:', err);
    res.redirect('/home?error=Server error. Please try again.');
  }
};

module.exports = { uploadFileHandler, getHomePage, deleteFileHandler };