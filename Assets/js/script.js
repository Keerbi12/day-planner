// Easier to work with moment.js by saving moment() as m
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

// An array representing the hour of each day
const inputHour = [
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
]

// An array of Id's for buttons
const btnId = [
    'btnOne',
    'btnTwo',
    'btnThree',
    'btnFour',
    'btnFive',
    'btnSix',
    'btnSeven',
    'btnEight',
    'btnNine',
];


// Set the text to current date via moment.js
$('#currentDay').text(m.format('MMMM Do YYYY, LTS'));

// for loop which creates rows equal to the array size of times, this is done when the screen is first loaded
for (let i = 0; i < times.length; i++) {
// Creating a row, with three columns, Date, Input box and Save button
// using JQuery, we can directly set the id to the array we created above for buttons and input boxes
    const rowEl = $(
        `<tr>
            <td class=tDate> 
                ${times[i]} 
            </td>
            <td class=tInput> 
                <form class=formInput>
                    <input id=${inputId[i]} class="inputBox ${inputHour[i]}" type="text" placeholder="Enter"></input>
                </form>
            </td>
            <td class=tSave>
                <div class=btnContainer> 
                    <button id=${btnId[i]} class=saveBtn>save</button>
                </div>
            </td>
        </tr>`
    );
    // Appends the row to the table
    $('#tableHere').append(rowEl);
};

// Finds current time to nearest hour, parseInt converts from string to number, used instead of number() in case of 9 AM etc.
const currentTime = parseInt(m.format('k'));
// const currentTime = x, for testing purposes, comment above and change value of x to 9-17
console.log(currentTime);
// Checks to see which time container is equal to the currentTime, will make the container turn red
if (currentTime === parseInt(inputHour[0])) {
    $('.9').addClass('inputBoxRed')
} else if (currentTime === parseInt(inputHour[1])) {
    $('.10').addClass('inputBoxRed')
} else if (currentTime === parseInt(inputHour[2])) {
    $('.11').addClass('inputBoxRed')
} else if (currentTime === parseInt(inputHour[3])) {
    $('.12').addClass('inputBoxRed')
} else if (currentTime === parseInt(inputHour[4])) {
    $('.13').addClass('inputBoxRed')
} else if (currentTime === parseInt(inputHour[5])) {
    $('.14').addClass('inputBoxRed')
} else if (currentTime === parseInt(inputHour[6])) {
    $('.15').addClass('inputBoxRed')
} else if (currentTime === parseInt(inputHour[7])) {
    $('.16').addClass('inputBoxRed')
} else if (currentTime === parseInt(inputHour[8])) {
    $('.17').addClass('inputBoxRed')
}

// Sets the time input container to green if it is above the current time.
if (currentTime < parseInt(inputHour[1])) {
    $('.10').addClass('inputBoxGreen')
} 
if (currentTime < parseInt(inputHour[2])) {
    $('.11').addClass('inputBoxGreen')
} 
if (currentTime < parseInt(inputHour[3])) {
    $('.12').addClass('inputBoxGreen')
} 
if (currentTime < parseInt(inputHour[4])) {
    $('.13').addClass('inputBoxGreen')
} 
if (currentTime < parseInt(inputHour[5])) {
    $('.14').addClass('inputBoxGreen')
} 
if (currentTime < parseInt(inputHour[6])) {
    $('.15').addClass('inputBoxGreen')
} 
if (currentTime < parseInt(inputHour[7])) {
    $('.16').addClass('inputBoxGreen')
} 
if (currentTime < parseInt(inputHour[8])) {
    $('.17').addClass('inputBoxGreen')
} 

// Saves to local storage upon click for btnOne etc.
$('#btnOne').click(function() {
    localStorage.setItem('textValueOne', $('#inputOne').val());
});
// btnTwo
$('#btnTwo').click(function() {
    localStorage.setItem('textValueTwo', $('#inputTwo').val());
});
// btnThree
$('#btnThree').click(function() {
    localStorage.setItem('textValueThree', $('#inputThree').val());
});
// btnFour
$('#btnFour').click(function() {
    localStorage.setItem('textValueFour', $('#inputFour').val());
});
// btnFive
$('#btnFive').click(function() {
    localStorage.setItem('textValueFive', $('#inputFive').val());
});
// btnSix
$('#btnFive').click(function() {
    localStorage.setItem('textValueSix', $('#inputSix').val());
});
// btnSeven
$('#btnSeven').click(function() {
    localStorage.setItem('textValueSeven', $('#inputSeven').val());
});
// btnEight
$('#btnEight').click(function() {
    localStorage.setItem('textValueEight', $('#inputEight').val());
});
// btnNine
$('#btnNine').click(function() {
    localStorage.setItem('textValueNine', $('#inputNine').val());
});

// Sets the value of textbox, to what was saved to local storage, repeats for all 9 input boxes
$('#inputOne').val(localStorage.getItem('textValueOne'));
$('#inputTwo').val(localStorage.getItem('textValueTwo'));
$('#inputThree').val(localStorage.getItem('textValueThree'));
$('#inputFour').val(localStorage.getItem('textValueFour'));
$('#inputFive').val(localStorage.getItem('textValueFive'));
$('#inputSix').val(localStorage.getItem('textValueSix'));
$('#inputSeven').val(localStorage.getItem('textValueSeven'));
$('#inputEight').val(localStorage.getItem('textValueEight'));
$('#inputNine').val(localStorage.getItem('textValueNine'));

// An alert that tells you the text has been saved
$('.saveBtn').click(function() {
    // alert(`Text saved on ${this.id}`);
    console.log(`Text saved on ${this.id}`)
});