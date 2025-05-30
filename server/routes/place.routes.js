const express = require("express");
const router = express.Router();
const placeController = require("../controllers/place.controller");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, placeController.createPlace);
router.get("/", placeController.getAllPlaces);
router.put("/:placeId", placeController.updatePlace);
router.delete("/:placeId", authMiddleware, placeController.deletePlace);
router.get("/:placeId", placeController.getPlaceById);

router.get("/:placeId/reviews", placeController.getReviewsForPlace);
router.post("/:placeId/review", placeController.addReview);
router.put("/:placeId/reviews/:reviewId", placeController.updateReview);
router.delete("/:placeId/reviews/:reviewId", placeController.deleteReview);

module.exports = router;
