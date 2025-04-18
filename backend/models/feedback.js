const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  averageRating: Number,
  totalReviews: Number,
  positiveRate: Number
});

module.exports =  mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema,"Feedback");
