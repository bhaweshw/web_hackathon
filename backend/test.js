const axios = require('axios');

async function testAPI() {
    try {
        console.log('Testing POST /api/auth/register...');
        const response = await axios.post('http://localhost:3000/api/auth/register', {
            username: 'testuser123',
            email: 'testuser@example.com',
            password: 'TestPass123'
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        console.log('✓ Success! Status:', response.status);
        console.log('Response:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        if (error.response) {
            console.log('✗ Error! Status:', error.response.status);
            console.log('Error data:', error.response.data);
        } else if (error.request) {
            console.log('✗ No response from server');
            console.log('Request error:', error.message);
        } else {
            console.log('✗ Error:', error.message);
            console.log('Full error:', error);
        }
    }
}

testAPI();

