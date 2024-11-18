const express = require('express');
const router = express.Router();

router.post("/login",Login);
router.post("/signUp",SignUp);
// router.post("/",getUsers);

module.exports = router;