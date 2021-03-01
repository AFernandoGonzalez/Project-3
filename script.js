

var mySong = document.getElementById('mySong');
// mySong.autoplay;
mySong.volume = 0.6
var playBtn = document.getElementById('playBtn');



playBtn.onclick = function(){
  if (mySong.paused){
    mySong.play();
    mySong.currentTime = 200;
    mySong.volume = 0.6
    
  }else{
    mySong.pause();
  }
}





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

    var welcome0Div = document.getElementById('welcome0');
  	welcome0Div.innerHTML = ` Welcome`;
  
  	var welcomeDiv = document.getElementById('welcome');
  	welcomeDiv.innerHTML = `<h1> ${playerName} </h1>`;
  }
  
  
}

// test
var msg1 = document.getElementById('message1');
var msg2 = document.getElementById('message2');
var msg3 = document.getElementById('message3');
var msg4 = document.getElementById('message4');
var msg5 = document.getElementById('message5');

var no_of_guesses = 0;
var guessed_nums = [];
var totalScore = 10;
var highScore = [];

var randomNumber = Math.floor(Math.random() * 100) +1;
// console.log(randomNumber);

var numberGuessed = document.getElementById("userNumber").value;

function enterGuess() {
	//Get Users Guess
  let userGuess = document.getElementById("userNumber").value;
    if (userGuess == '' ){
         // result in html 
        alert('Please enter a number');   
    }
    else {
      guessed_nums.push(userGuess);
      no_of_guesses +=1;

      // guessed_nums.push(userGuess);

    

      if (totalScore <= 1){
        document.getElementById("submit").style.visibility = "hidden";
        document.getElementById("tryAgain").style.visibility = "visible";
        msg5.textContent = `High score is:  ${totalScore - 1}` ;
        var resultNumber = document.getElementById('result');
  	      resultNumber.innerHTML = `<h1> The number was ${randomNumber} </h1>`;

          document.body.style.backgroundImage = "url('./img/gameOver.jpg')";
      }
      totalScore -=1;
      //fix to get to 0 only and start the game again
      
      
      
      if (userGuess < 1 || userGuess > 100){
         // result in html 
        alert('Please enter a number between 1 and 100');   
      }
      else if (userGuess == randomNumber) {
        msg1.textContent = 'Congrats! You have Won.'
        msg2.textContent = `Your number is :  ${userGuess}`;
        msg3.textContent = `You guess it in  ${no_of_guesses} guesses`;
        msg4.textContent = `Your score is:  ${totalScore + 1}`;
        msg5.textContent = `High score is:  ${totalScore + 1}` ;
         document.getElementById("submit").style.visibility = "hidden";
         var resultNumber = document.getElementById('result');
  	      resultNumber.innerHTML = `<h1> Your number is ${userGuess} </h1>`;
          
         //Change backgroud image once the player has won the game.
          document.body.style.backgroundImage = "url('https://media.giphy.com/media/fxsqOYnIMEefC/giphy.gif')";
          


      // Reset button
      document.getElementById("playAgain").style.visibility = "visible";
      }
      else if (userGuess < randomNumber){
        msg1.textContent = 'Your Guess is to LOW'
        msg2.textContent = `# of Guesses: ${no_of_guesses}`;
        msg3.textContent = `Guessed Numbers: ${guessed_nums}`;
        msg4.textContent = `Your Score: ${totalScore}`;
  
      }
      else if (userGuess > randomNumber){
        msg1.textContent = 'Your Guess is to HIGH'
        msg2.textContent = `# of Guesses: ${no_of_guesses}`;
        msg3.textContent = `Guessed Numbers: ${guessed_nums}`;
        msg4.textContent = `Your Score: ${totalScore}`;
  
      }

    }

}

