const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  images: [{ type: String }],
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  isAuction: { type: Boolean },
  auctionEndTime: { type: Date },
  isVisible: { type: Boolean }
});

// ✅ Sửa dòng này để tránh lỗi OverwriteModelError
module.exports = mongoose.models.Product || mongoose.model("Product", ProductSchema,"Product");
