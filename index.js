const chalk=require("chalk");

var readlineSync = require("readline-sync");

var score = 0;

function print(data){
  console.log(data);
}

print(chalk.magenta.bgWhite.bold("_________________"));
print(chalk.redBright.bgWhite.bold("  AVENGERS QUIZ  "));
print(chalk.magenta.bgWhite.bold("_________________"));

print("\n");


var highScore = [
  {
    name: "Sachin",
    score: 4,
  },
  {
    name: "Ayush",
    score: 3,
  },
]

///////////
var questionss = [{easy, medium, hard}];

var easy = [{
  question: "1. What is the real name of iron man?\n", 
  answer: "Robert Downey Junior"
},{
  question: "2. Who is the king of wakanda?\n", 
  answer: "Black Panther"

},{
  question: "3. Who is Bruce Banner?\n", 
  answer: "Hulk"
},{
  question: "4. HOw many infinity stones are there in avengers?\n", 
  answer: "6"
}];


///////
var medium = [{
  question: "1. What is Thor’s hammer called?\n", 
  answer: "Mjolnir"
},{
  question: "2. Where is Black Widow from??\n", 
  answer: "Russia"

},{
  question: "3. What is this robotic villain called?\n", 
  answer: "Ultron"
},{
  question: "4. Who is the Sorcerer Supreme?\n", 
  answer: "Doctor Strange"
}];

//////////
var hard = [{
  question: "1. What war did Captain America fight in?\n", 
  answer: "World War II"
},{
  question: "2. Who is this master spy?\n", 
  answer: "Black Widow"

},{
  question: "3. Where is Avengers Tower located?\n", 
  answer: "New York"
},{
  question: "4. What was the first film in the Marvel Cinematic Universe?\n", 
  answer: "Iron Man"
}];
////////////


function welcome(){
  var userName = readlineSync.question(chalk.green("What's your name?🤔\n"));
  print("\n");
  print(chalk.white.bgMagenta("Hey!" , chalk.strikethrough.bold(userName.toUpperCase()) + " 😀 " + " Welcome to the Game 🤓  "));
  

  print("\n");
  print(chalk.blue.bold("Let's see you are an Avengers fan or not! 🤨 "));
  print("\n");
  print(chalk.red.bold("There are 3 difficulty level:\n"));
  print(chalk.green("1. EASY\n"));
  print(chalk.green("2. MEDIUM\n"));
  print(chalk.green("3. HARD \n"));
  
  print("Let's Begin! 😁 ")
  print("\n");
 
 }


function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    print(chalk.green.bold("You are right 🙂" ));
    score = score + 1;
  }else{
    print(chalk.redBright.bold("You are wrong 🙁"));
    print("Correct answer is:"+ chalk.greenBright.bold(answer));
  }
  print(chalk.magentaBright.bold("curent score: "+ score));
  print(chalk.red.bold("_________________________________\n"));
}

function game(){

 var level = readlineSync.question(chalk.blackBright.bgWhite.bold(("Choose your level:")));
 


 if(level === "1"){
   print(chalk.green.bold("\nWelcome to level 1\n"));
   for( var i=0; i<easy.length; i++){
   play(easy[i].question, easy[i].answer)
  }

 }else if(level=== "2"){
   print(chalk.green.bold("\nWelcome to level 2\n"));
   for( var i=0; i<medium.length; i++){
   play(medium[i].question, medium[i].answer)
  }

 }else if(level === "3"){
   print(chalk.green.bold("\nWelcome to level 3\n"));
   for( var i=0; i<hard.length; i++){
   play(hard[i].question, hard[i].answer)
  }

  }  else
       print(chalk.redBright.bold("\nselect valid level (1 or 2 or 3)\n"));
       
       }


  // for( var i=0; i<questions.length; i++){
  //  play(questions[i].question, questions[i].answer)
  // }


function showScore(){
  print(chalk.whiteBright.bold.bgMagenta("😁 Your final score is: "+ score));
  print("\n");

  if(score === 4){
    print(chalk.red.bold("You're also an AVENGER😲\n"));
  }else 
  {
   print(chalk.yellow.bold("You are not an AVENGER'S fan🤨\n"));
  }
   print("\n");
    
    print(chalk.magenta.bgWhite.bold("_________________"));
print(chalk.magenta.bgWhite.bold.underline("  Leaderboad     "));
print(chalk.magenta.bgWhite.bold("                 \n"));

    
  highScore.map(score => console.log(chalk.whiteBright.bold.bgMagenta(score.name, ":", score.score)))

 
}

welcome();
game();
showScore();
 