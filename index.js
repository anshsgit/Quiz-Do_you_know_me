var readLineSync = require("readline-sync");
var score = 0;

function welcome(){
  var userName = readLineSync.question('Whats your name? ');
  console.log();
console.log("Welcome to the quiz "+userName+" Let's see how much do you know Ansh");
  console.log();
}

//data structure for high scores
var highScores = [{
  name: "Ravi",
  score: 5
},{
  name: "Rajesh Koothrapali",
  score: 4
}];

//data structure for questions
var questions = [{
  question: "Where does he live? ",
  answer: "Ghaziabad"
},{
  question: "Is he a Marvel fan or a DC fan? ",
  answer: "Marvel"
},{
  question: "What is he learning? ",
  answer: "Web Development"
},{
  question: "What's his favourite tv show? ",
  answer: "Game of Thrones"
},{
  question: "What's his favourite dish? ",
  answer: "Chole Bhature"
}];

function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Right answer");
    score = score+1;
  }
  else{
    console.log("Wrong answer");
  }
  console.log("Your current score is "+score);
  console.log("___________");
  console.log("___________");
  console.log();
}

function game() {
  for(var i=0; i<questions.length; i++){
   var currentQuestion = questions[i];
play(currentQuestion.question,currentQuestion.answer);
}
}

function scores() {
  console.log("Yay! you scored: "+score);
  console.log("These are the high scores, if you surpassed them then please ping me up");
  for(var i=0; i<highScores.length; i++){
    var current = highScores[i];
    console.log(current.name+ " - " + current.score);
  }
  }

welcome();
game();
scores();