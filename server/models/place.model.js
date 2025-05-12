const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, required: true },
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryId: Number,
  address: String,
  city: String,
  createdAt: { type: Date, default: Date.now },
  reviews: [reviewSchema]
});

module.exports = mongoose.model('Place', placeSchema);
