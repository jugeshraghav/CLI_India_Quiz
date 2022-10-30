var readlineSync = require("readline-sync");

var score = 0;
// highscores
var highScore=[
  {name:"Jugesh",
  score:4},
  {name:"shreya",
    score:2
  }
]

// array of objects
var questions = [{
  question: "What is the capital of India? ",
  answer: "New Delhi"
}, {
  question: "Who is known as father of our nation?",
  answer: "Mahatma Gandhi"
},
{
  question: "How many states arer there in India?",
  answer: "29"
},
{
  question: "Name the national animal of India",
  answer: "Tiger"
},
 {
  question: "How many colors are there in Tiranga?",
  answer: "4"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to--My country?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

var highestScore= findHighestScore();
  function findHighestScore(){
     var max=0;
  for(var i=0; i<highScore.length; i++) 
    {
      if(highScore[i].score >= max){
      max=highScore[i].score;
    }
    }
    return max;
  }

function showScores() {
  console.log("YAY! You SCORED: ", score);
  if(score>highestScore){
    console.log("You made the new highscore! Congratulations");
  }
  console.log("The highest score is: "+ highestScore);
}


welcome();
game();
showScores();
