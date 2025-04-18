const express = require("express");
const router = express.Router();
const disputeCtrl = require("../controllers/disputeController");

// Lấy toàn bộ khiếu nại
router.get("/", disputeCtrl.getAllDisputes);

// Cập nhật trạng thái xử lý & phân xử
router.put("/:id", disputeCtrl.updateDisputeStatus);

module.exports = router;
