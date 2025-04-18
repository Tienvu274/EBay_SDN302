

const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type:String
    }
   
});

const Category =  mongoose.models.Category  || mongoose.model("Category", CategorySchema, "Category");
module.exports = Category;
