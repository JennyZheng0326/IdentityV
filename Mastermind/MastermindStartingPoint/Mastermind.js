let reset = document.getElementById("reset");
reset.addEventListener('click', resetGame, false);
let secretCode = null;
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let selects = document.getElementsByTagName("select");
//let guessCircle = document.getElementsByClassName("color indicator");
let guessCircles = document.querySelectorAll(".color.indicator");

//The background of each select tag should reflect the color option that the user chooses
for(let select of selects) {
    select.addEventListener('change', changeColor, false);
}

// let gC;
// for(gC of guessCircles){
//     gC.addEventListener('change', changeColor, false);
// }

//change the background color of the select tag to match its value
function changeColor() {
    //for(let i = 0; i < 4; i ++){
    let color = this.value;
    //guessCircles[i].style.setProperty("background-color", color);
    this.style.setProperty("background-color", color);
    this.style.setProperty("color", "white");
    if(color === "yellow") {
        this.style.setProperty("color", "black");
    }
    //}

}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", changeCircle, false);

// function changeCircle(){
//     for(let select of selects){
//         let miao = select.value;
//         guessCircle.style.setProperty("background-color", miao);
//         //guessCircles.push(select.value);
//     }
// }

//let checkAns = [];


//Function 1: Black circle: compare for 4 times
//Function 2: White circle: secretcode



function changeCircle(){
    for(let j = 0; j < 4; j ++){
        guessCircles[j].style.setProperty("background-color", selects[j].value);
    }
}



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
submit.addEventListener("click", feedback2, false);
// //Every time the user makes a guess, you need to append a n
// ew row in the board.
//I suggest that you make a row look something like this:
function feedback2(){

let checkAns = document.querySelectorAll(".color.indicator");

function feedback2(){
    for(let a = 0; a < 4; a ++){
        for(let b = 0; b < 4; b ++){
            if(selects[a].value == secretCode[b] && selects[a].value != secretCode[a] ){
                checkAns[a].style.setProperty("background-color", "black");

            }
            else if(selects[a].value == secretCode[a]){
                checkAns[a].style.setProperty("background-color", 'white');
            }
        }
    }
}
}

let feedback = document.getElementsByClassName('feedback');
feedback.appendChild (checkAns);

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
