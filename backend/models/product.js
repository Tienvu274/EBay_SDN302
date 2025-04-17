const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number }, // ✅ Sửa lại thành số
  images: [{ type: String }], // ✅ Nếu là URL ảnh thì dùng String
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" // ✅ hoặc "Seller" tùy bạn tổ chức DB
  },
  isAuction: { type: Boolean },
  auctionEndTime: { type: Date }, // ✅ Thêm định nghĩa
  isVisible: { type: Boolean }
});

const Product = mongoose.model("Product", ProductSchema, "Product");
module.exports = Product;
