const Place = require('../models/place.model');

// Створити нове місце
exports.createPlace = async (req, res) => {
  try {
    const place = new Place(req.body);
    await place.save();
    res.status(201).json(place);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create place', error: err });
  }
};

// Отримати всі місця
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch places' });
  }
};

// Додати відгук до місця
exports.addReview = async (req, res) => {
  const { placeId } = req.params;
  const { userId, rating, text } = req.body;

  try {
    const place = await Place.findById(placeId);
    if (!place) return res.status(404).json({ message: 'Place not found' });

    place.reviews.push({ userId, rating, text });
    await place.save();
    res.status(201).json(place);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add review' });
  }
};
