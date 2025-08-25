require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Media = require('./models/media'); // Adjust path if needed

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer-storage-cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'carousel_media',  // Optional: folder in your Cloudinary account
    resource_type: 'auto',     // Supports image and video uploads automatically
  },
});
const upload = multer({ storage });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const app = express();
app.use(cors());

// Upload media (image/video) API
app.post('/api/carousel/upload', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  const { path: url, originalname, mimetype } = req.file;
  const type = mimetype.startsWith('image/') ? 'image' :
               mimetype.startsWith('video/') ? 'video' : null;

  if (!type) {
    return res.status(400).json({ message: 'Only image and video files are allowed' });
  }

  try {
    const newMedia = await Media.create({
      filename: originalname,
      url,
      type,
    });
    res.status(201).json(newMedia);
  } catch (error) {
    res.status(500).json({ message: 'Error saving media metadata' });
  }
});

// List all media API
app.get('/api/carousel/media', async (req, res) => {
  try {
    const mediaList = await Media.find().sort({ uploadedAt: -1 });
    res.json(mediaList);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching media list' });
  }
});

// Delete media by ID (only deletes DB entry; optionally implement Cloudinary deletion)
app.delete('/api/carousel/media/:id', async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) return res.status(404).json({ message: 'Media not found' });

    // Optional: Delete file from Cloudinary using public_id if you store it
    // You may need to store `public_id` at upload time for this.

    res.json({ message: 'Media deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting media' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
