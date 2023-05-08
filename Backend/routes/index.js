const express = require('express');
const ROUTER = express.Router();

ROUTER.use('/user', require('./user'))
ROUTER.use('/flights', require('./flight'))



module.exports = ROUTER;