const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: String,
    review: String,
    rating: Number
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
