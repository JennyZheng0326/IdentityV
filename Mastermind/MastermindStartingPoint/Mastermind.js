let reset = document.getElementById("reset");
reset.addEventListener('click', resetGame, false);
let secretCode = null;
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let selects = document.getElementsByTagName("select");
let guessCircles = document.querySelectorAll(".color.indicator");

//The background of each select tag should reflect the color option that the user chooses
for(let select of selects) {
    select.addEventListener('change', changeColor, false);
}
//change the background color of the select tag to match its value
function changeColor() {
    let color = this.value;
    this.style.setProperty("background-color", color);
    this.style.setProperty("color", "white");
    if(color === "yellow") {
        this.style.setProperty("color", "black");
    }
}

let submitButton = document.getElementById("submit");

let guess = [ ];

//reset the game
resetGame();
function resetGame() {
    //pick a random code when resetting the game
    pickRandomCode();
    // You'll need to activate the submit button
    // You'll want to clear any rows from a previous game if they exist
}
//a function here that will pick a random 4-color code and
//store it as an array in the variable named secretCode.
function pickRandomCode() {
    //first make sure there is nothing in the secretCode array by making it an empty array
    secretCode = [];
    //push 4 random strings from the colors array into the secretCode array
    for(let i = 0; i < 4; i++) {
        secretCode.push(colors[Math.floor(6 * Math.random())]);
    }
}
//You'll need to create an event listener on the submit button for when
//the user makes a guess.
    
//Every time the user makes a guess, you need to append a new row in the board.
//I suggest that you make a row look something like this:


// <div class="mmRow">
//     <div class="guess">
//         <div class="color indicator"></div>
//         <div class="color indicator"></div>
//         <div class="color indicator"></div>
//         <div class="color indicator"></div>
//     </div>
//     <div class="feedback">
//         <div class="color indicator"></div>
//         <div class="color indicator"></div>
//     </div>
// </div>


/* The color class name would be the color that you want the indicator to be
such as "red", "blue", "black", "white", etc. The CSS is already set up
so that the indicator divs will look like circles*/

submitButton.addEventListener('click', submit, false);

// let indicator = docuemnt.getElementsByClassName('color indicator');

let black = document.getElementsByClassName('black');
let white = document.getElementsByClassName('white');

function submit() {

for (let select of selects) {

    

    guessIndicator.classList.add('color', guess[i]);
    guessDiv.appendChild(guessIndicator);

    if (guess[i] == secretCode[i]) {
        blackCircles++;
    }

}
}

