
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    orderDate: {
        type: Date
    },
    toalPrice: {
        type: Number
    },
    status: {
        type: String
    },

});

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema, "Order");
module.exports = Order;
