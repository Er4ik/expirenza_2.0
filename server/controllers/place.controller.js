const Place = require("../models/place.model");

// Створити нове місце
exports.createPlace = async (req, res) => {
  try {
    const place = new Place({
      ...req.body,
    });

    await place.save();
    res.status(201).json(place);
  } catch (err) {
    res.status(500).json({ message: "Failed to create place", error: err });
  }
};

// Отримати всі місця
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch places" });
  }
};

// Отримати місце за ID
exports.getPlaceById = async (req, res) => {
  const { placeId } = req.params;

  try {
    const place = await Place.findById(placeId);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch place", error: err });
  }
};

// Оновити місце
exports.updatePlace = async (req, res) => {
  const { placeId } = req.params;

  try {
    const place = await Place.findById(placeId);
    if (!place) return res.status(404).json({ message: "Place not found" });
    Object.assign(place, req.body);
    await place.save();

    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ message: "Failed to update place", error: err });
  }
};

exports.deletePlace = async (req, res) => {
  const { placeId } = req.params;

  try {
    const place = await Place.findById(placeId);
    if (!place) return res.status(404).json({ message: "Place not found" });

    await place.deleteOne();
    res.status(200).json({ message: "Place deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete place", error: err });
  }
};

// Додати відгук до місця
exports.addReview = async (req, res) => {
  const { placeId } = req.params;
  const { text } = req.body;

  try {
    const place = await Place.findById(placeId);
    if (!place) return res.status(404).json({ message: "Place not found" });

    place.reviews.push({ text });
    await place.save();
    res.status(201).json(place);
  } catch (err) {
    res.status(500).json({ message: "Failed to add review" });
  }
};

// Отримати всі відгуки для місця
exports.getReviewsForPlace = async (req, res) => {
  const { placeId } = req.params;

  try {
    const place = await Place.findById(placeId);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    res.status(200).json(place.reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews", error: err });
  }
};

// Оновити відгук
exports.updateReview = async (req, res) => {
  const { placeId, reviewId } = req.params;
  const { rating, text } = req.body;

  try {
    const place = await Place.findById(placeId);
    if (!place) return res.status(404).json({ message: "Place not found" });

    const review = place.reviews.id(reviewId);
    if (!review) return res.status(404).json({ message: "Review not found" });

    if (rating !== undefined) review.rating = rating;
    if (text !== undefined) review.text = text;

    await place.save();
    res.status(200).json({ message: "Review updated", review });
  } catch (err) {
    res.status(500).json({ message: "Failed to update review", error: err });
  }
};

// Видалити відгук
exports.deleteReview = async (req, res) => {
  const { placeId, reviewId } = req.params;

  try {
    const place = await Place.findById(placeId);
    if (!place) return res.status(404).json({ message: "Place not found" });

    const review = place.reviews.id(reviewId);
    if (!review) return res.status(404).json({ message: "Review not found" });

    place.reviews.pull(reviewId);
    await place.save();

    res.status(200).json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete review", error: err });
  }
};
