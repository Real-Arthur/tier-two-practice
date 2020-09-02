console.log(`It's a me client.js`);

$(document).ready(onReady);

// Example
// {
//     activity: "Typing practices",
//     isScreenTime: true,
//     type: "Mind Exercises"
// },

// let activities = ???;

// AJAX!!!!!
// ----------------
$.ajax({
    url: 'http://localhost:3000/activities'
})
    .then(function(activities) {
    console.log("We got a response!", activities)

    for (let activity of activities) {
        $('tbody').append(`
        <tr>
                <td>${activity.activity}</td>
                <td>${activity.isScreenTime}</td>
                <td>${activity.type}</td>
            </tr>
        `)
    }
});

function onReady() {
    console.log(`I'm ready`)
}