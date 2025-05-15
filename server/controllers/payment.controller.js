const Payment = require("../models/payment.model");

// GET all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("userId placeId");
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET one payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate(
      "userId placeId"
    );
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.json(payment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new payment
exports.createPayment = async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update payment
exports.updatePayment = async (req, res) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("userId placeId");

    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.json(updatedPayment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE payment
exports.deletePayment = async (req, res) => {
  try {
    const deleted = await Payment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Payment not found" });
    res.json({ message: "Payment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
