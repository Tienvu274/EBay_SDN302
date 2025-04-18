const mongoose = require("mongoose");

const DisputeSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  RaiseBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // người khiếu nại
  descripition: [String],
  status: {
    type: String,
    enum: ["pending", "in_review", "resolved"],
    default: "pending"
  },
  resolution: { type:String},
  createdAt: { type: Date, default: Date.now }
});

module.exports =  mongoose.models.Dispute || mongoose.model("Dispute", DisputeSchema,"Dispute");
