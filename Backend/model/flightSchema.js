const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    source: {
        type: String
    },
    destination: {
        type: String
    },
    tariff: {
        type: Number
    },
    airline: {
        type: String
    },
    date: {
        type: Date
    }
}, { timestamps: true });

const FLIGHT = mongoose.model('flights', flightSchema);

module.exports = FLIGHT;