const Review = require("../models/review");
const Feedback = require("../models/feedback");
const Product = require("../models/product");
const User = require("../models/user");

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("reviewerId", "username email")
      .populate("productId", "title");

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("sellerId", "username email");
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
