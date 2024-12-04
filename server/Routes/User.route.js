const express = require('express');
const router = express.Router();
const signInController = require('../Controllers/Signin.controller');
const signUpController = require('../Controllers/Signup.controller')
router.post('/signup', signUpController.signUp);
router.post('/login', signInController.login);




module.exports = router;