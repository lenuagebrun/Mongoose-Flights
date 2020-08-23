var express = require('express');
var router = express.Router();
const Flight = require('../models/flight');
const controllerFlight = require('../controllers/flight')

router.get('/', function (req, res) {
    Flight.find({}, function (err, flights) {
        if (err) return
        res.render('show', { flightList: flights })
    })
})

router.delete('/:id', controllerFlight.deleteFlight)

module.exports = router;