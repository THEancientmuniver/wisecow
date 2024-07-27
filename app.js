const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Load SSL certificate and key
const options = {
    key: fs.readFileSync('ssl/server.key'), // Update this path
    cert: fs.readFileSync('ssl/server.cert') // Update this path
};

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Additional example route
app.get('/about', (req, res) => {
    res.send('About the Wisecow Application');
});

// Create HTTPS server
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});
