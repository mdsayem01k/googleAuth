const axios = require('axios');
const jwt = require('jsonwebtoken');
const { oauth2Client } = require('../utils/googleConfig');
const User = require('../models/userModel');

/* GET Google Authentication API. */
exports.googleLogin = async (req, res, next) => {
    const code = req.query.code;
    
    // Check if the authorization code is provided
    if (!code) {
        return res.status(400).json({
            message: "Authorization code is required"
        });
    }

    try {
        // Get the tokens using the provided code
        const googleRes = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(googleRes.tokens);
        console.log(googleRes.tokens)
        // Fetch user information using the access token
        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${googleRes.tokens.access_token}`
        );

        const { email, name, gender = "Not specified", picture } = userRes.data;  
        console.log('user_info:',email, name, gender, picture);

   
        let user = await User.findOne({ user_email: email });

        if (!user) {
            user = await User.create({
                user_name: name,
                user_email: email,
            });
        }

        const { _id } = user;
        const token = jwt.sign({ _id, email },
            process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_TIMEOUT || '1h',  
        });

        res.status(200).json({
            message: 'success',
            token,
            user,
        });

    } catch (err) {
        console.error('Google Login Error:', err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
