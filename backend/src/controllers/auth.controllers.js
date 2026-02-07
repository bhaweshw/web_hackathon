const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide username, email, and password"
            });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        // Create new user
        const user = await userModel.create({ username, email: email.toLowerCase(), password });

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET_KEY || 'your_secret_key',
            { expiresIn: '7d' }
        );

        // Return success response without password
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: userResponse,
            token
        });
    } catch (err) {
        console.error("Register error - Full stack:", err.stack);
        console.error("Register error - Message:", err.message);
        res.status(500).json({
            success: false,
            message: err.message || "Error registering user",
            error: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
    }
}

module.exports = {registerUser};