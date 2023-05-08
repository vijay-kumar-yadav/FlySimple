const express = require('express');
const ROUTER = express.Router();
const passport = require('passport')
const flightController = require('../controller/flight-controller');

ROUTER.post('/find', passport.authenticate('jwt', { failureRedirect: '/api/user/create-session' }), flightController.FINDFLIGHTS);

module.exports = ROUTER;