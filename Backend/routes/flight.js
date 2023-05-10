const express = require('express');
const ROUTER = express.Router();
const passport = require('passport')
const flightController = require('../controller/flight-controller');

let auth = ""

// ROUTER.post('/find', passport.authenticate('jwt', { failureRedirect: '/api/user/create-session' }), flightController.FINDFLIGHTS);

ROUTER.get('/tariff/:source/:destination/:date', passport.authenticate('jwt', { failureMessage: "authorization invalid" }), flightController.FINDFLIGHTS);



module.exports = ROUTER;