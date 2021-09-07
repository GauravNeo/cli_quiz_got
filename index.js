var chalk = require('chalk');
var readLineSync = require("readline-sync");
var log = console.log;

var wrong = chalk.bold.red;
var correct = chalk.bold.green;

var userName = readLineSync.question(chalk.blue.bold("What's you name mate ? "));
log("\n")
log(chalk.blue(userName.toUpperCase() + " !!!") + chalk.red(" Welcome to GAME OF THRONES QUIZ"));
log("\n")
log(chalk.bgRed.bold("How to Play and Rules"))
log(chalk.green("a.Four options would be provided against each question"));
log(chalk.green("b.Enter the correct option alphabet"));
log(chalk.green("c. +1 for correct respone -1 for wrong response"));


var questions = [
  {
    question : "Who is the youngest of Ned Stark’s children?",
    a : "Sansa",
    b : "Arya",
    c : "Bran",
    d : "Rickon",
    answer : "d"
  },
  {
    question : "Who is Jon Snow’s mother?",
    a : "Cersi Lannister",
    b : "Unnamed Person",
    c : "Lyanna Stark",
    d : "Lysa Arryn",
    answer : "c"
  },
  {
   question : "Jamie Lannister has a golden ___.",
    a : "tongue",
    b : "hand",
    c : "chariot",
    d : "sword",
    answer : "b"
  },
  {
    question : "What’s the name of the band of assassins that Arya Stark joins in Braavos?",
    a : "Brotherhood Without Banners",
    b : "Second Sons",
    c : "Sons of the Harpy",
    d : "Faceless Men",
    answer :  "d"
  },
  {
   question : "What is Davos Seaworth’s nickname?",
    a : "the onion knight",
    b : "the sand snake",
    c : "the hound",
    d : "hot pie",
    answer :  "a"
  }
];


var score = 0;
function gotQuiz(actualAnswer, userAnswer){
  if(userAnswer.toLowerCase() === actualAnswer.toLowerCase()){
    score = score + 1;
    log(correct("Correct Answer :) " + " " + "Your Updated Score " + score));
  }else{
    score = score - 1;
    log(wrong("Wrong Answer :( " + " " + "Your Updated Score " + score));
  }
}

for(var i = 0 ; i< questions.length; i++){
  log("\n")
  log(chalk.underline.red("Question" + i + " : " + questions[i].question));
  log(chalk.blue("a" + " : " + questions[i].a));
  log(chalk.blue("b" + " : " + questions[i].b));
  log(chalk.blue("c" + " : " + questions[i].c));
  log(chalk.blue("d" + " : " + questions[i].d));
  var userAnswer = readLineSync.question(chalk.red("Your Answer : "));
  gotQuiz(questions[i].answer, userAnswer)
}

log("\n")
log("#############################################################");
if(score>=3){
  log(chalk.bgGreen("Score : " + score + "  .....wooow mate, Iron Throne will soon be yours"));
}else{
  log(chalk.bgRed("Score : " + score + "  .....prepare hard cause Winter is coming"));
}
log("#############################################################");

