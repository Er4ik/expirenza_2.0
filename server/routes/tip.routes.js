const express = require("express");
const router = express.Router();
const tipController = require("../controllers/tip.controller");

router.get("/", tipController.getAllTips);
router.get("/:id", tipController.getTipById);
router.post("/", tipController.createTip);
router.put("/:id", tipController.updateTip);
router.delete("/:id", tipController.deleteTip);

module.exports = router;
