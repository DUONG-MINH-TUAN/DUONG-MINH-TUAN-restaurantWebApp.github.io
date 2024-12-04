const express = require('express');
const router = express.Router();
const {login, signup} = require('../services/User.services');
const {reloadAccessToken} = require('../services/Auth.services');
router.post('/login', login);
router.post('/signup', signup);
router.post('/refresh',reloadAccessToken);


module.exports = router;