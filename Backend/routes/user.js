const express = require('express');
const ROUTER = express.Router();
const userController = require('../controller/user-controller')

ROUTER.post('/create', userController.CREATEUSER);


module.exports = ROUTER;