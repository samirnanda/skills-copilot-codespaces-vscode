// Create web server
const express = require('express');
const app = express();

// Create a route to get all comments
app.get('/comments', (req, res) => {
    // Get all comments from the database
    const comments = [
        { id: 1, author: 'John', content: 'Hello World!' },
        { id: 2, author: 'Jane', content: 'Hi there!' },
    ];
    res.json(comments);
});

// Start the web server
app.listen(3000, () => {
    console.log('Web server started at http://localhost:3000');
});