
const User = require("../models/user");
const Product = require("../models/product");
const Order = require("../models/order");
// const Db = require("../config/db")

exports.getOverview = async (req, res) => {
    try {

        const userCount = await User.countDocuments();
        const productCount = await Product.countDocuments();
        const orderCount = await Order.countDocuments();

        res.json({
            users: userCount,
            products: productCount,
            orders: orderCount
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};


