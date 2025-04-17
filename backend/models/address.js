
const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    fullName: {
        type:String
    },
    phone: {
        type: String
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    status:{
        type: String
    },
    country:{
        type: String
    },
    isDefault:{
        type:Boolean
    }

});

const Address = mongoose.model("Address", AddressSchema, "Address");
module.exports = Address;
