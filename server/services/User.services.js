const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser } = require('../Models/User.model');
const {generateAccessToken,generateRefreshToken} = require('./Auth.services');
const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const purify = DOMPurify(window);
const COOKIE_OPTIONS = {
    httpOnly: true, // Ngăn chặn truy cập bằng JavaScript
    // secure: process.env.NODE_ENV === 'production', // Chỉ gửi cookie qua HTTPS
    sameSite: 'Strict', // Giới hạn cookie không thể được gửi qua các yêu cầu cross-site
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };

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
    if(password){
        
        // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        // if (!passwordRegex.test(sanitizedPassword)) {
        //     errors.password = 'Password must be at least 8 characters, contain letters, numbers, and special characters.';
        //   }
        
    }

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
        
        res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS);
        // console.log('refreshtoken: ', refreshToken);
        // console.log('accessToken: ',accessToken);
        res.json({ accessToken });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};