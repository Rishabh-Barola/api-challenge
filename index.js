const express = require('express');

const app = express();
app.use(express.json()); // Middleware for parsing JSON

// Route 1: base_url/first
app.get('/first', (req, res) => {
    res.set({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    });
    res.status(200).json({ message: "Success" });
});

// Route 2: base_url/second
app.post('/second', (req, res) => {
    res.set({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    });

    const { param1, param2 } = req.body;
    if (param1 === 'value1' && param2 === 'value2') {
        res.status(400).json({ error: "Bad Request" });
    } else {
        res.status(400).json({ error: "Invalid Parameters" });
    }
});

// Export the app for Vercel
module.exports = app;
