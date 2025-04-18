const express = require("express");
const router = express.Router();
const reviewCtrl = require("../controllers/reviewController");

router.get("/reviews", reviewCtrl.getAllReviews);        // Lấy toàn bộ đánh giá
router.delete("/reviews/:id", reviewCtrl.deleteReview);  // Xoá đánh giá
router.get("/feedbacks", reviewCtrl.getAllFeedbacks);    // Lấy tất cả phản hồi

module.exports = router;
