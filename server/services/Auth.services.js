const prisma = require('../Models/prisma.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

//create access token 
const generateAccessToken = (user) => {
    return jwt.sign({id:user.id},process.env.JWT_SECRET_KEY,{expiresIn:'15m'});
}

//create refresh token
const generateRefreshToken = (user) => {
    return jwt.sign({id:user.id},);
}

// Middleware để xác thực token
exports.authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.userId;
    next();
  });
};


