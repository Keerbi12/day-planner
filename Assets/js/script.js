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
]

// Set the text to current date via moment.js
$('#currentDay').text(m.format('MMMM Do YYYY, LTS'));



// var tableHere = querySelectorAll("#tableHere");
const tableHere = $('#tableHere');

// Create button function
const addBtn = function() {
    $('.btnContainer').append($('<button class=saveBtn>save</button>'))
    $('.inputContainer').append($('<input class="inputBox" type="text" placeholder="Enter"></input>'))
};

// for loop which creates rows equal to the array size of times
for (let i = 0; i < times.length; i++) {
// Creating a row, with three columns, Date, Input and Save
const rowEl = $(
    `<tr>
        <td class=tDate> 
            ${times[i]} 
        </td>
        <td class=tInput id=${inputId[i]}> 
            <div class=inputContainer>
            </div>
        </td>
        <td class=tSave>
            <div class=btnContainer> 
            </div>
        </td>
    </tr>`
);
// Appends the row to the table
tableHere.append(rowEl);
// Adds paceholder text into input column
// $('.tInput').text(`Enter`);
// Calls create button function
};


addBtn();










