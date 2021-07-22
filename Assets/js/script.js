const m = moment();

console.log(m.format('MMMM Do YYYY, h:mm:ss a'));

// jQuery of var currentDay = getElementById('#currentDay'), 
var currentDay = $('#currentDay');
// Set the text to current date via moment.js
currentDay.text(m.format('MMMM Do YYYY'));





