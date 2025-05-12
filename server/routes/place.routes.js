const express = require('express');
const router = express.Router();
const placeController = require('../controllers/place.controller');

router.post('/', placeController.createPlace);
router.get('/', placeController.getAllPlaces);
router.post('/:placeId/review', placeController.addReview);

module.exports = router;
