const bcrypt = require('bcryptjs');
const { getAllUser} = require('../Models/User.model');
const { JSDOM } = require('jsdom');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;


exports.promoteAdmin = (req,res) =>{
    const authHeader = req.headers["authorization"];
    const accessToken = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({message: "No token provided"});
    }
    
    //verify the token expiration
    jwt.verify(accessToken, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({message: "Invalid access token"});
      }
    });

    const payload = jwt.decode(accessToken);
    // check role
    if (!payload.role || payload.role!=="admin"){
      return res.status(403).json({message: "Not authorized as admin"});
    }
    const users = getAllUser();
    if(!users){
      return res.status(500).json({message: "No found user"});
    }

    return res.status(200).json(users);

}