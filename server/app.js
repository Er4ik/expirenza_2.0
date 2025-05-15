const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
// Routes
const userRoutes = require("./routes/user.routes");
const placeRoutes = require("./routes/place.routes");
const paymentRoutes = require("./routes/payment.routes");
const tipRoutes = require("./routes/tip.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/places", placeRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/tips", tipRoutes);

app.get("/", (req, res) => {
  res.send("Server is running 🎉");
});

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
