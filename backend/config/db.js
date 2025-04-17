
const mongoose = require('mongoose');
require('dotenv').config();

const Category = require("../models/category.js");
const User = require("../models/user.js");
const Order = require("../models/order.js");
const OrderItem = require("../models/orderItem.js");
const Product = require("../models/product.js");

const Db = {}

Db.Category = Category;
Db.User = User;
Db.Order = Order;
Db.OrderItem = OrderItem;
Db.Product = Product;

Db.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("MongoDB connection failed: ", error);
        process.exit(1);
    }
};

module.exports = Db;