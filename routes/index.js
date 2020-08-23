var express = require('express');
const Flight = require('../models/flight');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  Flight.find({}, function (err, flights) {
    if (err) return
    res.render('index', { flightList: flights })
  });
});

module.exports = router;
