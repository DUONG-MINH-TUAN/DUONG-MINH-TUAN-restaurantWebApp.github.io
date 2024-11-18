const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const UserRoute = require('./Routes/User.route');

//login
//api: localhost:3000/api/users
app.use("/api/users",UserRoute);


//CRUD
app.get("/",(req, res) => {
    res.send("Welcome our chat app APIs..");
  });
app.listen (PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})