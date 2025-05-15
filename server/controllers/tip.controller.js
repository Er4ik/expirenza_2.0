const Tip = require("../models/tip.model");

// GET all tips
exports.getAllTips = async (req, res) => {
  try {
    const tips = await Tip.find().populate("userId placeId");
    res.json(tips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET one tip by ID
exports.getTipById = async (req, res) => {
  try {
    const tip = await Tip.findById(req.params.id).populate("userId placeId");
    if (!tip) return res.status(404).json({ message: "Tip not found" });
    res.json(tip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new tip
exports.createTip = async (req, res) => {
  try {
    const newTip = new Tip(req.body);
    await newTip.save();
    res.status(201).json(newTip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update tip
exports.updateTip = async (req, res) => {
  try {
    const updatedTip = await Tip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("userId placeId");

    if (!updatedTip) {
      return res.status(404).json({ message: "Tip not found" });
    }

    res.json(updatedTip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE tip
exports.deleteTip = async (req, res) => {
  try {
    const deleted = await Tip.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Tip not found" });
    res.json({ message: "Tip deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
