var express = require('express');
var router = express.Router();
const Flight = require('../models/flight');
const flightList = require('../controllers/flight')

router.get('/:id', function (req, res) {
    Flight.findById(req.params.id, function (err, flights) {
        if (err) return
        res.render('details', { flightList: flights })
    })
})

router.post('/:id', flightList.create);

module.exports = router;