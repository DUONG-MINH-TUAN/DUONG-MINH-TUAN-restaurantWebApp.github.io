const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser,findAdminByEmail, } = require('../Models/User.model');
const {generateAccessToken,generateRefreshToken} = require('./Auth.services');
const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
const window = new JSDOM('').window;
const purify = DOMPurify(window);
const COOKIE_OPTIONS = {
    httpOnly: true, 
    secure: false, 
    sameSite: 'Lax', 
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  };

// // decode and take token expiration
// const getTokenExpiry = (token) => {
//     const decodedToken = jwt.decode(token); // Giải mã token
//     if (decodedToken && decodedToken.exp) {
//         const expiryTime = decodedToken.exp * 1000; // Chuyển từ giây thành mili giây
//         return new Date(expiryTime); // Trả về thời gian hết hạn dưới dạng đối tượng Date
//     }
//     return null; // Nếu không có trường exp
// }

const sanitizeController = (email,password,confirmedPassword = null) => {
    const errors = {};
    const sanitizedEmail = purify.sanitize(email.trim());
    if(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(sanitizedEmail)) {
        errors.email = 'Invalid email format.';
      }
    }
    const sanitizedPassword = purify.sanitize(password.trim());
    // if(password){
        
    //     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    //     if (!passwordRegex.test(sanitizedPassword)) {
    //         errors.password = 'Password must be at least 8 characters, contain letters, numbers, and special characters.';
    //       }
        
    // }

    if(confirmedPassword){
    const sanitizedConfirmedPassword = purify.sanitize(confirmedPassword);
    if (sanitizedPassword !== sanitizedConfirmedPassword) {
        errors.confirmedPassword = 'Passwords do not match.';
    }
    }

    return { sanitizedEmail, sanitizedPassword, errors };
}

// sign up
exports.signup = async (req, res) => {
    try {
        const { email, password, confirmedPassword } = req.body;
        // Check missing fields
        if (!email || !password || !confirmedPassword) {
            return res.status(400).json({
                error: 'Missing required fields: email, password, confirmed password.',
            });
        }

        // Sanitize and validate
        const { sanitizedEmail, sanitizedPassword, sanitizedConfirmedPassword, errors } =
            sanitizeController(email, password, confirmedPassword);
        // Handle validation errors
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }


        // check the email is already used
        const existingUser = await findUserByEmail(sanitizedEmail);

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // password encryption
        const hashedPassword = await bcrypt.hash(sanitizedPassword, 10);

        // create new user
        const newUser = await createUser(sanitizedEmail, hashedPassword);

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// login the user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
// Check missing fields
if (!email || !password) {
    return res.status(400).json({
        error: 'Missing required fields: email, password, confirmed password.',
    });
}

    // Sanitize and validate
    const { sanitizedEmail, sanitizedPassword, errors } =
        sanitizeController(email, password);
    // Handle validation errors
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }
        // find user through email
        const user = await findUserByEmail(sanitizedEmail);
    
        // check the user validity
        if (!user) {
            
            const admin = await findAdminByEmail(sanitizedEmail);
            if (!admin){
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            // check the password validity
                const isPasswordValid = await bcrypt.compare(sanitizedPassword, user.password);
                if (!isPasswordValid) {
                    return res.status(401).json({ message: 'Incorrect password' });
                }

                //create two tokens
                const accessToken = generateAccessToken(user);
                const refreshToken = generateRefreshToken(user);
                
                res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
                console.log('refreshtoken: ', refreshToken);
                // console.log('accessToken: ',accessToken);

                // const expiryDate = getTokenExpiry(accessToken);
               
                return res.json({ accessToken});
        } 
        

        // check the password validity
        const isPasswordValid = await bcrypt.compare(sanitizedPassword, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        //create two tokens
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        
        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
        console.log('refreshtoken: ', refreshToken);
        // console.log('accessToken: ',accessToken);

        // const expiryDate = getTokenExpiry(accessToken);
        // console.log('expiry date of access token: ',expiryDate);
        
        res.json({ accessToken});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.logout = (req,res) => {
    //clear refresh token in cookie
    res.clearCookie("refreshToken");
    res.send("Logged out successfully!!!");
}


exports.getUserDetails= (req,res) =>{
    const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("No token provided");
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).send("Invalid token");
    }

    res.send("This is a protected route");
  });
}   