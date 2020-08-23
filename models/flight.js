const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
    destination: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true
    },
    arrival: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        }
    }
});

const ticketSchema = new mongoose.Schema({
    seat: {
        type: String,
        match: /[A-F][1-99]\d?/,
        required: true
    },
    price: {
        type: Number,
        required: true, min: 0
    }
})

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true
    },
    flightNo: {
        type: Number,
        required: true, min: 10, max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        }
    },
    destinations: [destinationSchema],
    tickets: [ticketSchema]
});

FlightModel = mongoose.model('Flights', flightSchema);

module.exports = FlightModel;

//Flight.create({ airline: 'American', airport: 'AUS', flightNo: 333 }, function (err, doc) { console.log(doc); })