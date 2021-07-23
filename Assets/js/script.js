const m = moment();
// An array of times
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



// Variable that represents empty table
var tableHere = $('#tableHere');
// Creating a row, with three columns, Date, Input and Save
var row = $('<tr><td class=tDate>' + 'Date' + '</td><td class=tInput>' + 'Input' + '</td><td class=tSave>' + 'Save' + '</td></tr>');
// Adding the row to the empty table
tableHere.append(row);






