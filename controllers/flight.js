var Flight = require('../models/flight');
var flightData = require('../config/database')

module.exports = {
    create,
    deleteFlight
};

function create(req, res) {
    const flight = new Flight(req.body);
    console.log(flight);
    flight.save(function (err) {
        if (err) return console.log(err)
        res.redirect('/');
    })
};

function deleteFlight(req, res){
    flightData.deleteOne(req.params.id);
    res.redirect('/');
}

