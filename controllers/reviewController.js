const Review = require('../models/Review');

const submitReview = async (req, res) => {
    try {
        console.log('Review data received:', req.body);
        const reviewData = new Review(req.body);
        await reviewData.save();
        res.status(200).send('Review added successfully');
    } catch (err) {
        console.error('Error saving review:', err);
        res.status(500).send('Error submitting review');
    }
};

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        console.error('Error fetching reviews:', err);
        res.status(500).send('Error fetching reviews');
    }
};

module.exports = {
    submitReview,
    getReviews
};
