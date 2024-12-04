const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const userController = require('./Controllers/User.controller');
const cookieParser = require('cookie-parser');
const SECRET_KEY = process.env.JWT_SECRET_KEY;
app.use(cookieParser());

const crypto = require('crypto');
const refresh_secret_key = crypto.randomBytes(64).toString('hex');
console.log('refresh_secret_key:',refresh_secret_key);

//login
//api: localhost:3000/api/users
app.use("/api/user",userController);


 


//CRUD
app.get("/",(req, res) => {
    res.send("Welcome our chat app APIs..");
  });
app.listen (PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})