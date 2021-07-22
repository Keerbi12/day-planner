const m = moment();

const times = [
    '9AM',
    '10AM',
    '11AM',
    '12PM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM'
]

console.log(m.format('MMMM Do YYYY, h:mm:ss a'));

// jQuery of var currentDay = getElementById('#currentDay'), 
var currentDay = $('#currentDay');
// Set the text to current date via moment.js
currentDay.text(m.format('MMMM Do YYYY'));



// Table
var tableHere = $('.tableHere');


var tableEl = $('<tr>');
tableEl.text('Hello');

tableHere.append(tableEl);





