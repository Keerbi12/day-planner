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
                <input class="inputBox" type="text" placeholder="Enter"></input>
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
tableHere.append(rowEl);
};

$('#btnOne').click(function() {
    console.log("btnOne")
})


// // click to submit form
// $('.saveBtn').click(function() {
//     $('.formInput').submit();
// });

// // Prevents default refresh on form submit
// $('.formInput').submit(function(event) {
//     event.preventDefault();

//     var inputOney = $('#inputOne').val();
//     localStorage.setItem("inpo1", inputOney);
// })

// $('#inputOne').val(localStorage.getItem('inpo1'));











