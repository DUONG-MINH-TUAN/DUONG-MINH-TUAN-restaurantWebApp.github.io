const jwt =require('jsonwebtoken');
const { getOrCreateGuestId } = require('./User.services');
const { sendCart, getAllOrders } = require('../Models/Order.model');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;


exports.orderFood = async(req,res) => {
    const selectedProducts = req.body;
    const guestId = getOrCreateGuestId(req,res);
    if(!guestId){
        console.log("There is no guest id in order services");
    }
    try {
        const responseOrder = await sendCart(guestId,selectedProducts);
        if(!responseOrder){
            console.log("There is no response from send cart in order model");
            return;
        }
        res.status(201).json(responseOrder);
    } catch (error) {
        console.log("Error in order service: ",error);
        res.status(500).json({ error: "Failed to add item to cart" });
    }
}

exports.getAllOrderInfors = async(req,res) => {
    try {
        const authHeader = req.headers["authorization"];
    if(!authHeader){
      console.log("Error in get all users in user.services: there is no auth header");

    }
    const accessToken = authHeader && authHeader.split(" ")[1];
    if (!accessToken) {
      console.log("Error in get all users in user.services: there is no access token");
      return res.status(401).json({message: "No token provided"});
    }
    
    // //verify the access token expiration
    // jwt.verify(accessToken, SECRET_KEY, (err, user) => {
    //   if (err) {
    //     return res.status(403).json({message: "Invalid access token"});
    //   }
    // });

    // Sử dụng async/await để verify token
    const user = await new Promise((resolve, reject) => {
      jwt.verify(accessToken, SECRET_KEY, (err, decodedUser) => {
        if (err) {
          reject({ status: 403, message: "Invalid access token" });
        } else {
          resolve(decodedUser);
        }
      });
    });

    const payload = jwt.decode(accessToken);
    // check role
    if (!payload.role || payload.role!=="admin" ){
      return res.status(403).json({message: "Not authorized"});
    }
    const orders = await getAllOrders();
    if (!orders){
        return res.status(404).json({
            success: false,
            message: "There is no orders in order services"
        });
    }
    return res.status(200).json({orders: orders,message: "Get all users successfully!!!",success:true});
    } catch (error) {
        console.error('Error getting orders in service:', error);
        return res.status(500).json({ message: 'An error occurred while getting orders in service.' });
    }
}