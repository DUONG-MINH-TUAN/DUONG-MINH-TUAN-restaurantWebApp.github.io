const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const userController = require('./Controllers/User.controller');
const cookieParser = require('cookie-parser');
const SECRET_KEY = process.env.JWT_SECRET_KEY;
app.use(cookieParser());



//login
//api: localhost:3000/api/user
app.use("/api",userController);


//CRUD
app.get("/",(req, res) => {
    res.send("Welcome our chat app APIs..");
  });
app.listen (PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})