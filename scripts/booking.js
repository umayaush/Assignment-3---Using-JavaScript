/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 0;
var numberOfDaysSelected = 0;
var half = document.getElementById("half");
var full = document.getElementById("full");
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var clearButton = document.getElementById("clear-button");
var calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeColour() {
    if (this.classList.contains('blue-hover') && !this.classList.contains('clicked')) {
        this.classList.add('clicked');
        numberOfDaysSelected = numberOfDaysSelected + 1;
        costPerDay = 35;
        calculate();
    }
}

monday.addEventListener('click', changeColour);
tuesday.addEventListener('click', changeColour);
wednesday.addEventListener('click', changeColour);
thursday.addEventListener('click', changeColour);
friday.addEventListener('click', changeColour);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
    numberOfDaysSelected = 0;
    calculate();
}

clearButton.addEventListener('click', clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener('click', function() {
    half.classList.add('clicked');
    full.classList.remove('clicked');
    costPerDay = 20;
    calculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener('click', function() {
    full.classList.add('clicked');
    half.classList.remove('clicked');
    costPerDay = 35;
    calculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let totalCost = costPerDay * numberOfDaysSelected;
    calculatedCost.innerHTML = totalCost;
}