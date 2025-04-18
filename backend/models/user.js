const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: Number },
  avatarURL: { type: String }, // ✅ Đồng bộ với schema ảnh
  isActive: { type: Boolean }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema, "User"); // ✅ Collection viết hoa
module.exports = User;