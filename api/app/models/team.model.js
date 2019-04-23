const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    name: { type: String, required: true },
    coach: { type: String, required: true },
    players: [{
        name: { type: String, required: true },
        position: { type: String, required: true },
        number: { type: Number, required: true },
        substitute: { type: Boolean, default: false }
    }]
});

module.exports = mongoose.model('Team', TeamSchema);