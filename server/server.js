const express = require('express');

console.log("It's a me server.js")

// Create an express app
const app = express();

// Serve static files from server/public folder
app.use(express.static("server/public"))

// Define a list of activities for my kid
let activities = [
    {
        activity: "Typing practices",
        isScreenTime: true,
        type: "Mind Exercises"
    },
    {
        activity: "Bike around the lake",
        isScreenTime: false,
        type: "Body Break"
    },
    {
        activity: "FB Chat with a friend",
        isScreenTime: true,
        type: "Social"
    },

];

// Endpoint:
// GET /activities
// Respond with a list of activities
app.get('/activities', function(req, res) {
    // Send back the array of activities
    res.send(activities);
});

// Listen for requests
const port = 3000;
app.listen(port, function() {
    console.log("Sup Sup get at me")
});