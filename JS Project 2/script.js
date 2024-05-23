'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct Number'
// Dom is not a part of javascript
// the  dom is apart of web API   important

//selecting the score value

//in the querySelector you need to mention the class name like '.classname'  for the id name like '#Idname'

// 'textContent' is used to manupulate text
// '.value' is used to set the value of the selected query
// document.querySelector('.score').textContent=5;
// // document.querySelector('.number').textContent=12;
// //. value  vshould be small
// document.querySelector('.guess').value=14;
// document.querySelector('.number').textContent=16;
//random number generator 
let randomNumber=function(){
 return Math.trunc(Math.random() * 20) + 1;  
}
// console.log(randomNumber());


let secretNumber = randomNumber();
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
//display message function
 const displayMessage=function(message){
  document.querySelector('.message').textContent =message;

 }
//  function audioplay(){
//  var audio = new Audio("./assest/8-bit-video-game-win-level-sound-version-1-145827.mp3")
//  audio.play();
// }
 
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // 20

  //when no number
  if (!guess) {
   displayMessage('❌ No number')
  //  document.querySelector('.message').textContent = '❌ No Number';
  }
  else if(guess>20 || guess<0){
    displayMessage("Between 1 and 20");
  }
  // if player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
 // document.querySelector('.message').textContent = 'correct Number 🎉';
    displayMessage('correct Number 🎉');
    document.querySelector('body').style.backgroundColor = 'green';
    // in ordeer to change the style you need to add style and dot camel case for the properties  and give as a string
    document.querySelector('.number').style.width = '30rem';
    audioplay();

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // number is wrong
  else if(guess !== secretNumber){ 
    if (score > 1) {
      // document.querySelector('.message').textContent = guess>secretNumber?'Too High📈':'Too Low 📉';
      displayMessage(guess>secretNumber?'Too High📈':'Too Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
    }

  }
  // if the player is too High
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //   }
  // }
  // //if player is too Low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start Guessing';
  displayMessage('Start Guessing')
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  secretNumber = randomNumber();
  console.log(secretNumber);
});
