const mongoose = require('mongoose');

const adoptSchema = new mongoose.Schema({
    name: String,
    address: String,
    breed: String,
    email: String
});

const Adopt = mongoose.model('Adopt', adoptSchema);

module.exports = Adopt;
