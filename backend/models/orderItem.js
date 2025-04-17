
const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type:Number
    },
    unitPrice:{
        type:Number
    }
});

const OrderItem = mongoose.model("OrderItem", OrderItemSchema, "OrderItem");
module.exports = OrderItem;
