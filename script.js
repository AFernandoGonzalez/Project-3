

// var target;
// var guess_input_text;
// var guess_input;
// var finished = false;
// var guesses = 0;


// let btn = document.getElementById('btn');
// let output  = document.getElementById('outputtext');

// let number = Math.floor(Math.random() *5); 

// btn.addEventListener('click', function(){
//     let input = document.getElementById('userInput').value;
//     console.log(input);
//     if ( input == number){
//         output.innerHTML = `you got it =  ${number}`
//     }
//     else if (input < number ){
//         output.innerHTML = 'Low'
//     };
//     if (input > number){
//         output.innerHTML = 'High'
//     }
// });


// let btn = document.getElementById('btn');
// let output  = document.getElementById('outputtext');

// let number = Math.floor(Math.random() *5); 
// console.log(number);

// btn.addEventListener('click', myNumber())

// function myNumber(){
//     let input = document.getElementById('userInput').value;
 
//     if ( input == number){
//         output.innerHTML = `you got it =  ${number}`
//     }
//     else if (input < number ){
//         output.innerHTML = 'Low'
//     };
//     if (input > number){
//         output.innerHTML = 'High'
   
//   }
// }

// function do_game(){
//     var random_number = Math.floor(Math.random() *5); 

//     console.log(random_number);
//     var random_number_integer = Math.floor(random_number);
//     target = random_number_integer + 1;
//     while (!finished) {
//         guess_input_text = prompt("I am thinking of a number "+ "in the range 1 to 100.\n\n"+ "What is the number? ");
//         guess_input = parseInt(guess_input_text);
//         guesses += 1;
//         finished = check_guess();
//     }
// }

// do_game()







// function check_guess() {
//     if (isNaN(guess_input)) {

        
//         console.log("You have not entered a number.\n\n" + "Please enter a number in the range 1 to 100.");
       
//         return false;
//     }
//     if ((guess_input < 1) || (guess_input > 100)) {

//         output.innerHTML = "Please enter an integer number in the range 1 to 100.";
       
//         return false;
//     }
//     if (guess_input > target) {
//         console.log('Your number is too large!');
       
//         return false;
//     }
//     if (guess_input < target) {
//         console.log('Your number is too small!');

//         return false;
//     }
//     console.log(`You got it! The number was " + ${target} +
//           ".\n\nIt took you " + ${guesses} +
//           " guesses to get the number!`);

//     return true;
// }

// check_guess() 



function startGame() {
	
	//get the name of the player
  let playerName = document.getElementById('name').value;
  if (playerName == '') {
  	alert('Please enter your name');
  } 
  else {
  	//make the guess div visible
  	var guessDiv = document.getElementById('guess');
  	guessDiv.style.visibility = 'visible';
  
  	var welcomeDiv = document.getElementById('welcome');
  	welcomeDiv.innerHTML = '<h1>Welcome ' + playerName + '</h1>';
  }
  
  
}

// Random number
var randomNumber = Math.floor(Math.random() * 4) +1;
console.log(randomNumber);

var numberGuessed = document.getElementById("userNumber").value;

function enterGuess() {
	//Get Users Guess
  let userGuess = document.getElementById("userNumber").value;
    if (userGuess == ''){
         // result in html 
        alert('Please enter a number');   
    }
    else if (userGuess == randomNumber) {
        // result in html
    result.innerHTML = "You Win!!<br>"; 
    // showing the Reset button
    document.getElementById("playAgain").style.visibility = "visible";
    }
    else {
        // result in html
    document.getElementById("userNumber").value = ""; 
    let lowHigh = userGuess > randomNumber ? "high" : "low";
  	result.innerHTML ='Your guess is too ' + lowHigh + ', Please try again';
  }

}