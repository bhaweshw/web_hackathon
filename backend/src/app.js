const express = require('express');
const cors = require('cors');
const authRoutes = require("./routes/auth.routes");

const app = express();

// Body parsing middleware - MUST be before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// 404 Not Found handler - only for routes that don't exist
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Global error handler - must be last with 4 parameters
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(err.statusCode || err.status || 500).json({
        success: false,
        message: err.message || "Internal server error"
    });
});

module.exports = app;