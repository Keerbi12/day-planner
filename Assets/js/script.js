const m = moment();
// An array of times
const times = [
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM'
]

// jQuery of var currentDay = querySelectorAll('#currentDay'), 
var currentDay = $('#currentDay');
// Set the text to current date via moment.js
currentDay.text(m.format('MMMM Do YYYY'));

// var tableHere = querySelectorAll("#tableHere");
var tableHere = $('#tableHere');

// for loop which creates rows equal to the array size of times
for (let i = 0; i < times.length; i++) {
// Creating a row, with three columns, Date, Input and Save
var row = $(
    `<tr>
        <td class=tDate> 
            ${times[i]} 
        </td>
        <td class=tInput> 
            Input 
        </td>
        <td class=tSave> 
            Save 
        </td>
    </tr>`
);
// Appends the row to the table
tableHere.append(row);
}






