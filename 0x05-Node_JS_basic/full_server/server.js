// full_server/server.js
const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

// Get the database file path from the command line arguments
const filePath = process.argv[2] || './database.csv';  // Default to database.csv if no argument is provided

app.locals.filePath = filePath;  // Store the filePath in locals

// Use the routes
app.use(routes);

// Start the server
app.listen(1245, () => {
    console.log('Server listening on port 1245');
});

module.exports = app;
