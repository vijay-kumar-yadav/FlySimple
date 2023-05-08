const express = require('express');
const ROUTER = express.Router();
const flightController = require('../controller/flight-controller');
ROUTER.post('/find', flightController.FINDFLIGHTS);

module.exports = ROUTER;