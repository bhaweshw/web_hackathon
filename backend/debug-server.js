const express = require('express');

const app = express();
app.use(express.json());

// Simple test route
app.post('/test', (req, res) => {
    res.json({ message: 'Test route works' });
});

// Create a simple router like auth.routes.js
const router = express.Router();
router.post('/register', (req, res) => {
    res.json({ message: 'Register route works' });
});

// Mount the router like we do in app.js
app.use('/api/auth', router);

// Start the server
const PORT = 3001;  // Using different port to avoid conflicts
app.listen(PORT, () => {
    console.log(`Debug server listening on port ${PORT}`);
});

// Keep the process alive
setTimeout(() => {
    console.log('Routes summary:');
    console.log('- POST /test');
    console.log('- POST /api/auth/register');
    console.log('Ready for testing...');
}, 1000);
