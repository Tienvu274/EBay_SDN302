
const express = require("express");
const router = express.Router();
const {getOverview } = require("../controllers/authController");

router.get("/list", getOverview);



module.exports = router;
