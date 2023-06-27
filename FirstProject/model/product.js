const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: [true, "price must be added"]
    },
    feature: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.4,
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "xiomi", "realme"],
            message: `{values} is not avaialable`
        }
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("Product", productSchema)