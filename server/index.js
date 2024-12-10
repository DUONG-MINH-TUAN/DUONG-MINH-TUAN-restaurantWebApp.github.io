const express = require('express');
const path = require('path');
const cors =require ('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const userController = require('./Controllers/User.controller');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// Thêm middleware body-parser để phân tích dữ liệu JSON
app.use(bodyParser.json());  // cho dữ liệu JSON
app.use(bodyParser.urlencoded({ extended: true }));  // cho dữ liệu dạng URL-encoded
// const corsOptions = {
//   origin: 'http://localhost:3000',  // Chỉ cho phép yêu cầu từ domain này
//   credentials: true                // Cho phép gửi cookie cùng với yêu cầu
// };
// app.use(cors(corsOptions));

app.use(cors());
//login
//api: localhost:5000/api
app.use("/api",userController);

// Serve static files từ React
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all route để React Router xử lý SPA routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

//CRUD
//check whether the server is running
app.get("/api/status",(req, res) => {
    // res.send("Welcome our chat app APIs..");
    return res.status(200).json({message: 'Server is running!!!'})
  });
app.listen (PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})