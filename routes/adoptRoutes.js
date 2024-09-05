const express = require('express');
const { submitAdoptionForm } = require('../controllers/adoptController');

const router = express.Router();

router.post('/adopt', submitAdoptionForm);

module.exports = router;
