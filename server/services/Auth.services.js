const prisma = require('../Models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

//create access token 
exports.generateAccessToken = (user) => {
    if (user.role){
      return jwt.sign({id:user.id,role:user.role},SECRET_KEY,{expiresIn:'2h'});
    }
    return jwt.sign({id:user.id},SECRET_KEY,{expiresIn:'1h'});
}

// API yêu cầu refresh token
exports.reloadAccessToken = async (req, res) => {
//   console.log('Cookies:', req.cookies);  // Kiểm tra giá trị của cookies
// console.log('Refresh Token:', req.cookies.refreshToken);  // Kiểm tra refresh token cụ thể

    const refreshToken = req.cookies.refreshToken;
    console.log("refreshToken when reloading:   ",refreshToken);
    if (!refreshToken) return res.status(401).json({ message: 'No refresh token found, please login again!!!' });

    jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid refresh token' });
        
        const newAccessToken = this.generateAccessToken(user);
        res.json({ accessToken: newAccessToken});
    });
};
//create refresh token
exports.generateRefreshToken = (user) => {
    if (user.role){
      return jwt.sign({id:user.id,role:user.role},REFRESH_SECRET_KEY,{expiresIn:'1d'});
    }
    return jwt.sign({id:user.id},REFRESH_SECRET_KEY,{expiresIn:'1d'});
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



