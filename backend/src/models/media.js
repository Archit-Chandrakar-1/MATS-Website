const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  filename: String,
  url: String,
  type: { type: String, enum: ['image', 'video'] },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Media', mediaSchema);
