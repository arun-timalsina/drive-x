// const { createClient } = require('@supabase/supabase-js');
// const mongoose = require('mongoose');
// require('dotenv').config();

// // MongoDB connection
// function connectToDB() {
//   mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.error('Error connecting to MongoDB:', err));
// }

// // Supabase initialization
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// // Function to upload a file to Supabase Storage
// async function uploadFile(bucketName, filePath, fileName) {
//   const { data, error } = await supabase
//     .storage
//     .from(bucketName)
//     .upload(fileName, filePath);

//   if (error) {
//     console.error('Error uploading file:', error);
//     return null;
//   }

//   // Get the public URL of the uploaded file
//   const { data: publicUrlData } = supabase
//     .storage
//     .from(bucketName)
//     .getPublicUrl(fileName);

//   return publicUrlData.publicUrl;
// }

// module.exports = { connectToDB, supabase, uploadFile };



const { createClient } = require('@supabase/supabase-js');
const mongoose = require('mongoose'); // Import mongoose
const fs = require('fs'); // Import the fs module
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key is missing in .env file');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Function to upload a file to Supabase Storage
async function uploadFile(bucketName, filePath, fileName) {
  try {
    console.log('Uploading file to Supabase...');
    console.log('Bucket:', bucketName);
    console.log('File Path:', filePath);
    console.log('File Name:', fileName);

    // Read the file content
    const fileContent = await fs.promises.readFile(filePath);
    console.log('File Content Size:', fileContent.length);

    // Upload the file content to Supabase
    const { data, error } = await supabase
      .storage
      .from(bucketName)
      .upload(fileName, fileContent, {
        contentType: 'image/jpeg', // Adjust based on file type
      });

    if (error) {
      console.error('Supabase upload error:', error);
      return null;
    }

    console.log('File uploaded successfully:', data);

    // Get the public URL of the uploaded file
    const { data: publicUrlData } = supabase
      .storage
      .from(bucketName)
      .getPublicUrl(fileName);

    console.log('Public URL:', publicUrlData.publicUrl);
    return publicUrlData.publicUrl;
  } catch (err) {
    console.error('Error in uploadFile:', err);
    return null;
  }
}

// Function to connect to MongoDB
function connectToDB() {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
}

module.exports = { supabase, uploadFile, connectToDB };