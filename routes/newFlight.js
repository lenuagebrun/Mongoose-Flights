var express = require('express');
var router = express.Router();
var flightList = require('../controllers/flight')

router.get('/', function (req, res, next) {
    res.render('./new/add')
});

router.post('/', flightList.create);

module.exports = router;