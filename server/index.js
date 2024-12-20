// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// require('dotenv').config();

// const app = express();
// const userController = require('./Controllers/User.controller');

// // Middleware
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // CORS configuration
// // const allowedOrigins = [
// //   'https://client-one-sigma-24.vercel.app',
// //   'http://localhost:3000' // Development
// // ];
// // app.use(cors({
// //     origin: function (origin, callback) {
// //       console.log('Origin:', origin); // Log origin để debug
// //       if (!origin || allowedOrigins.includes(origin)) {
// //         callback(null, true);
// //       } else {
// //         callback(new Error('Not allowed by CORS'));
// //       }
// //     },
// //     credentials: true
// //   }));
  
// app.use(cors('https://client-one-sigma-24.vercel.app'));
// // API routes
// app.use("/api", userController);

// // Health check API
// app.get("/api/status", (req, res) => {
//   res.status(200).json({ message: 'Server is running!!!' });
// });

// // Serve React static files (only in development)
// if (process.env.NODE_ENV === 'development') {
//   const path = require('path');
//   app.use(express.static(path.join(__dirname, '../client/build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// }

// // Listen only in local environment
// if (require.main === module) {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// }

// // Export app for Vercel
// module.exports = app;



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

app.use(cors({ origin: 'http://localhost:3000' }));
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