var questionNumber=0;
var timer;
var timerCount=75;
var correctAnswers=0;
var score=0;
// sets the inital score to 0-gives the computer a var to reference when creating the user score
var gameOver=document.querySelector("#gameOver");
var choices=document.querySelector("#choices");
var questionContainer=document.querySelector(".questions");
// var finalScore=document.querySelector("#final-score")
var start=document.querySelector("#start-button");
// added var for start button
var timerElement=document.querySelector("#timer");
// added var for timer element

// bank for all questions and answers
var questionBank=[
    {
        question:"String values must be enclosed within ____ when being assigned to variables.",
        choices: ["Commas", "curly brackets","quotation marks", "parentheses"],
        answer:"quotation marks"
    },
    {
        question:"The condition in an if/else statement is enclosed with ____.",
        choices: ["Quotation marks", "Curly Brackets", "Parenthesis","Square Brackets"],
        answer:"Curly Brackets"
    },
    {
        question:"Arrays in JavaScript can be used to store___.",
        choices:["Numbers and Strings","Other Arrays","Booleans","All of the Above"],
        answer:"All of the Above"
    },
    {
        question:">A very useful tool used during development and de-bugging for printing content to the de-bugger is____.",
        choices:["JavaScript","Terminal/GitBash","For Loops","Console.log"],
        answer:"Console.log"
    },
    {
        question:"Commonly used data types DO NOT include:",
        choices:["Strings","Booleans","Alerts","Numbers"],
        answer:"Alerts"
    }
    
];



function showQuestion(){
    var currQuestion=questionBank[questionNumber];
    // the current question is whatever index we are cycled on in the question bank
    // this function adds the questions and choices to the webpage
    var allQuestions=questionBank.length;
 
    var questionTitle=document.getElementById("questionHeader");
    questionTitle.textContent=currQuestion.question;
    // adds the questions to the page
    choices.innerHTML="";
    // clears the choices when your move to the next question
//     // for (i=0; i<currQuestion.choices.length; i++){
//     //     // sets the index to 0(the first item in the array) and cycles through the choices and questions in the object
//     //     var choiceIndex=document.createElement("button")
//     //     // creates a button for the choices
//     //     choiceIndex.setAttribute("value", userChoice)
//     //     console.log(userChoice)
//     //     // sets the items in the choices array as  option buttons
//     //     choiceIndex.textContent=i+1+". "+ userChoice;
//     //     // this sets the text content of the button element "choiceIndex"
//     //     if (userChoice===currQuestion.answer){
//     //         questionNumber++
//     //     }
//     // }

    currQuestion.choices.forEach(function(option,i){
        // this is a for loops that loops the questions and choices
        
        var choiceIndex=document.createElement("button")
        // creates a button for the choices
        console.log(choiceIndex)
        // checking to make sure this function is running correctly.
        choiceIndex.setAttribute("value", option)
        // sets the items in the choices array as  option buttons
        choiceIndex.textContent=i+1+". "+ option;
        // this sets the text content of the button element "choiceIndex"
        if (option===currQuestion.answer){
            choiceIndex.dataset.correct=true;
            // checks to see if the answer clicked is true
           
        }
        choiceIndex.addEventListener("click",function(event){
            answerClick(event.target);
            
            
        })
        choices.appendChild(choiceIndex)
        // this actually adds the choices onto the webpage
        // eachQuestion++
        // moves to the next question in the object
        if (questionNumber>=allQuestions){
            finishQuiz()
            // runs the finishquiz function once all questions in the object are ran through
        }

    })



    function answerClick(selectedChoice){
        var answer=currQuestion.answer
        // sets the answer var for the question index in the question bank
        if (selectedChoice===answer){
            console.log("correct")
            questionNumber++
            // moves the loop to the next question
            score+=1;
            // adds points to the final score
            timerCount+5

            console.log("check answerClick")
            
        }else{
            timerCount-5;
            // if the wrong answer is choser, this will deduct 5 seconds from the timer
        }

        document.body.appendChild(choices)
        // adds choices to the html body
        choices.addEventListener("click",answerClick);
        // adds a click event to the choices button and fires off the answerClick function when that click occurs
        points()

    }
   

    


// this function will be called if the user does not finish in the alotted time
function timesUp(){
    gameOver.textContent= "Try Again!"
    if (timerCount===0){
        clearInterval(timer);
        // clears timer
        questionContainer.style.display="none";
    }
}
// this function starts the timer and shows the questions to begin the quiz
function startGame(){
    timerCount=75;
    startTimer();
    showQuestion()
}
start.addEventListener("click", startGame)
function startTimer(){
    timer=setInterval(function(){
        timerCount--;
        timerElement.textContent=timerCount + "seconds left!"
        if (timerCount===0){
            timesUp();
            clearInterval(timer);
       }

    },1000);
}
function finishQuiz(){
    if (questionNumber>4){
        questionContainer.style.display=none;
        // hides the question container after all questions are answered
        finalScore.textContent="You scored:"+ score +"points!"

        endScore()
        inputBar()


    }

}

function points(){
    correctAnswers++;
    console.log(correctAnswers)
    // keeps track of the points as the questions are answered
 
}
function endScore(){
    score=points()*20
    // this sets the score to the total number of correct answers *20. If all answers are correct the final score would be 100.
    renderLastScore();
    console.log("end score")
    
}

function renderLastScore(){
    var userScore=localStorage.getItem("score")
    // save the users score to local storage
    userScore.localStorage.setItem("score");
  

}
function inputBar(){
    if (questionNumber>4){
        finalScore.style.display="block";
        // shows the final score initial input once all questions are answered
    }
}
}

