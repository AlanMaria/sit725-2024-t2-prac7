const express = require('express');
const { submitReview, getReviews } = require('../controllers/reviewController');

const router = express.Router();

router.post('/add-review', submitReview);
router.get('/get-reviews', getReviews);

module.exports = router;
