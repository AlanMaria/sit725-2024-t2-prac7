const Adopt = require('../models/Adopt');

const submitAdoptionForm = async (req, res) => {
    try {
        console.log('Form data received:', req.body);
        const adoptData = new Adopt(req.body);
        await adoptData.save();
        res.redirect('/success.html');
    } catch (err) {
        console.error('Error saving adoption request:', err);
        res.status(500).send('Error submitting form');
    }
};

module.exports = {
    submitAdoptionForm
};
