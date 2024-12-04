const bcrypt = require('bcryptjs');
const { findUserByEmail, createUser } = require('../Models/User.model');
const {generateAccessToken,generateRefreshToken} = require('./Auth.services');

// sign up
exports.signup = async (req, res) => {
    try {
        const { email, password, confirmedPassword } = req.body;


        // check the email is already used
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // password encryption
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const newUser = await createUser(email, hashedPassword);

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// login the user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // find user through email
        const user = await findUserByEmail(email);

        // check the user validity
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        //create two tokens
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Chỉ gửi cookie qua HTTPS trong môi trường production
            sameSite: 'Strict', // Ngăn chặn CSRF
        });
    
        res.json({ accessToken });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};