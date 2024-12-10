const express = require('express');
const router = express.Router();
const {login, signup,logout} = require('../services/User.services');
const {reloadAccessToken} = require('../services/Auth.services');
router.post('/login', login);
router.post('/signup', signup);

router.post('/logout', logout);



//create access token again
router.get('/refresh',reloadAccessToken);

//protected route
//use token to take the username of user
router.get('/protected/getUsername')

module.exports = router;