const express = require('express');
const bodyParser = require('body-parser')

console.log("It's a me server.js")

// Create an express app
const app = express();

// Serve static files from server/public folder
app.use(express.static("server/public"))

// Setup body parser to read request JSON body
app.use(bodyParser.urlencoded({ extended: true }))

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

// ENDPOINT
// Post /activities
// and add it to our activities array
app.post('/activities', function(req, res) {
    console.log('I got a request', req.body);
    let newActivity = req.body;

    // Add the new activity to our list of activities
    activities.push(newActivity);
    res.send(newActivity);

});


// Listen for requests
const port = 3000;
app.listen(port, function() {
    console.log("Sup Sup get at me")
});