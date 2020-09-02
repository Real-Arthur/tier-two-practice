const express = require('express');

console.log("It's a me server.js")

// Create an express app
const app = express();

// Listen for requests
const port = 3000;
app.listen(port, function() {
    console.log("Sup Sup get at me")
});