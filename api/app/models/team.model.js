const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coach: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Team', TeamSchema);