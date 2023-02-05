const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    category: {
        type: String,
        enum: ["vegetable", "fruit", "dairy"]
    }
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product;