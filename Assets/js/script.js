const m = moment();
// var tableHere = querySelectorAll("#tableHere");
const tableHere = $('#tableHere');
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
];
// An array of Id's for input boxes
const inputId = [
    'inputOne',
    'inputTwo',
    'inputThree',
    'inputFour',
    'inputFive',
    'inputSix',
    'inputSeven',
    'inputEight',
    'inputNine',
];

// Set the text to current date via moment.js
$('#currentDay').text(m.format('MMMM Do YYYY, LTS'));

// Create button function
const addBtn = function() {
    $('.btnContainer').append($('<button class=saveBtn>save</button>'))
    // Adds paceholder text into input column
    $('.formInput').append($('<input class="inputBox" type="text" placeholder="Enter"></input>'))
};

// for loop which creates rows equal to the array size of times
for (let i = 0; i < times.length; i++) {
// Creating a row, with three columns, Date, Input and Save button
const rowEl = $(
    `<tr>
        <td class=tDate> 
            ${times[i]} 
        </td>
        <td class=tInput> 
            <form class=formInput id=${inputId[i]}>
            </form>
        </td>
        <td class=tSave>
            <div class=btnContainer> 
            </div>
        </td>
    </tr>`
);
// Appends the row to the table
tableHere.append(rowEl);
};
// Calls create button function
addBtn();

// Prevents default refresh on form submit
$('.formInput').submit(function(event) {
    alert("hi");
    event.preventDefault();
})



// click to submit form
$('.saveBtn').click(function() {
    $('.formInput').submit();
});










