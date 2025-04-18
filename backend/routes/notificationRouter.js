const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

// Gửi thông báo hệ thống tới tất cả người dùng
router.post("/system", notificationController.sendSystemNotification);

module.exports = router;
