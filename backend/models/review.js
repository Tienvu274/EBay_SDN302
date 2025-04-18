const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Review || mongoose.model("Review", ReviewSchema,"Review");
