const mongoose = require('mongoose');

const wishListSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    wishlist: [{
        id: String,
        image: String,
        rating: {
            rate: Number,
            count: String
        },
        product: String,
        company: String,
        model: String,
        price: String,
        category: String,
        description: String,
    }]
});

module.exports = mongoose.model("wishList", wishListSchema);
