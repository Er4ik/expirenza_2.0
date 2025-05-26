const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryId: Number,
  address: String,
  city: String,
  rating: { type: Number, required: false, default: 4 },
  createdAt: { type: Date, default: Date.now },
  reviews: [reviewSchema]
});

module.exports = mongoose.model('Place', placeSchema);
