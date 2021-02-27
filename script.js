


function guessNumber() {
   
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");

   
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "You guessing too high!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "You guessing too low!("+guess+")";
    }
}



function showNumberToGuess() {

}



// Random number
function generateNumberToGuess() {

}


// showing guesses
function showGuesses(){

}

window.onload = function(){
    generateNumberToGuess();
}