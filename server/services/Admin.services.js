const bcrypt = require('bcryptjs');
const { getAllUser,promoteUserToAdmin} = require('../Models/User.model');
const { JSDOM } = require('jsdom');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;


exports.promoteAdmin = async (req,res) =>{
  try{
    const authHeader = req.headers["authorization"];
    if(!authHeader){
      console.log("Error in executing promote admin in admin.services: there is no auth header");

    }
    const accessToken = authHeader && authHeader.split(" ")[1];
    if (!accessToken) {
      console.log("Error in executing promote admin in admin.services: there is no access token");
      return res.status(401).json({message: "No token provided"});
    }
    
    //verify the access token expiration
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
    const users = await getAllUser();
    if(!users){
      return res.status(500).json({message: "No found user"});
    }
    console.log("Users when send request to promote admin: ",users);
    return res.status(200).json(users);
  }catch(error){
    console.log("Error in executing promote admin in admin.services: ",error.message)
  }
}

exports.promoteAdminReal = async (req,res) => {
  try {
    const userId = req.body.userId;
    if (!userId){
      console.log("There is no provided user id in promoteAdminReal in admin services");
      return res.status(404).json({message: "There is no provided user id"});
    }
    const authHeader = req.headers["authorization"];
    if(!authHeader){
      console.log("Error in executing promote admin in admin.services: there is no auth header");

    }
    const accessToken = authHeader && authHeader.split(" ")[1];
    if (!accessToken) {
      console.log("Error in executing promote admin in admin.services: there is no access token");
      return res.status(401).json({message: "No token provided"});
    }
    
    //verify the access token expiration
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
    const newAdmin = await promoteUserToAdmin(userId);
    if(!newAdmin){
      console.log("Cannot create new admin!!!");
      return res.status(404).json({message: "Cannot create new admin!!!"});
    }
    return res.status(200).json({newAdmin: newAdmin});
  } catch (error) {
    console.log("Error in executing promote admin real in admin.services: ",error.message);
  }
}