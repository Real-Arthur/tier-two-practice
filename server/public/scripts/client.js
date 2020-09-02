console.log(`It's a me client.js`);

$(document).ready(onReady);

// Example
// {
//     activity: "Typing practices",
//     isScreenTime: true,
//     type: "Mind Exercises"
// },
function onReady(){
    console.log(`I'm ready`)
// AJAX!!!!!
// ----------------
$.ajax({
    url: 'http://localhost:3000/activities',
    method: 'GET'
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
        `);
    } // end for
})
.catch(function(errorInfo) {
    console.log('something is bad', errorInfo);
    alert('All is bad');
}); // end of AJAX.then()

} // end onReady