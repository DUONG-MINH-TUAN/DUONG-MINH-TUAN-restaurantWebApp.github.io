const express = require('express');
const cors =require ('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const userController = require('./Controllers/User.controller');
const cookieParser = require('cookie-parser');
const SECRET_KEY = process.env.JWT_SECRET_KEY;
app.use(cookieParser());
app.use(cors());
// Thêm middleware body-parser để phân tích dữ liệu JSON
app.use(bodyParser.json());  // cho dữ liệu JSON
app.use(bodyParser.urlencoded({ extended: true }));  // cho dữ liệu dạng URL-encoded

//login
//api: localhost:5000/api
app.use("/api",userController);


//CRUD
//check whether the server is running
app.get("/status",(req, res) => {
    // res.send("Welcome our chat app APIs..");
    return res.status(200).json({message: 'Server is running!!!'})
  });
app.listen (PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})