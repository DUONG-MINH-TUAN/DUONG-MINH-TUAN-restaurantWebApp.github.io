const bcrypt = require('bcryptjs');
const { getAllUser} = require('../Models/User.model');
const { JSDOM } = require('jsdom');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;


exports.promoteAdmin = (req,res) =>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
      return res.status(401).send("No token provided");
    }
    
    //verify the token
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).send("Invalid token");
      }
    });
    const users = getAllUser();
    if(!users){
      return res.status(500).json()
    }

}