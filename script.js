

var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;



function do_game(){
    var random_number = Math.floor(Math.random() *5); 
    // 
    console.log(random_number);
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer + 1;
    while (!finished) {
        // guess_input_text = prompt("I am thinking of a number "+ "in the range 1 to 100.\n\n"+ "What is the number? ");
        guess_input_text = document.getElementById("guess").value = guess_input_text;
        guess_input = parseInt(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }
}

// do_game()



function check_guess() {
    if (isNaN(guess_input)) {
        console.log("You have not entered a number.\n\n" + "Please enter a number in the range 1 to 100.");
        // alert("You have not entered a number.\n\n" + "Please enter a number in the range 1 to 100.");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)) {
        console.log("Please enter an integer number in the range 1 to 100.");
        // alert("Please enter an integer number in the range 1 to 100.");
        return false;
    }
    if (guess_input > target) {
        console.log('Your number is too large!');
        // alert("Your number is too large!");
        return false;
    }
    if (guess_input < target) {
        console.log('Your number is too small!');
        // alert("Your number is too small!");
        return false;
    }
    console.log(`You got it! The number was " + ${target} +
          ".\n\nIt took you " + ${guesses} +
          " guesses to get the number!`);
    // alert("You got it! The number was " + target +
    //       ".\n\nIt took you " + guesses +
    //       " guesses to get the number!");
    return true;
}

check_guess() 