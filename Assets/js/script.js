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

// jQuery of var currentDay = querySelectorAll('#currentDay'), 
var currentDay = $('#currentDay');
// Set the text to current date via moment.js
currentDay.text(m.format('MMMM Do YYYY'));

// var tableHere = querySelectorAll("#tableHere");
var tableHere = $('#tableHere');

var createTable = function() {
    for (let i = 0; i < times.length; i++) {
        // Creating a row, with three columns, Date, Input and Save
var row = $('<tr><td class=tDate>' + times[i] + '</td><td class=tInput>' + 'Input' + '</td><td class=tSave>' + 'Save' + '</td></tr>');

        tableHere.append(row);
    }
};

createTable();






