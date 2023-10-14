var questionNumber=0;
var gameOver=document.querySelector("#gameOver");
var choices=document.querySelector("#choices");
var questionContainer=document.querySelector(".questions");

var start=document.querySelector("#start-button");
// added var for start button
var timerElement=document.querySelector("#timer");
// added var for timer element
var next=document.querySelector("#next");
// bank for all questions and answers
var timerCount=75;

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

// using Show to show the questions as the user 

// function to append questions to page
function showQuestion(){
    var currQuestion=questionBank[questionNumber]
    // Do I need to define questionNumber somewhere else? and if so, how?? Declaring it as a var disrupts the code. 
    var questionTitle=document.getElementById("questionHeader");
    questionTitle.textContent=currQuestion.question;
    choices.innerHTML="";
    
    // loop through questions and choices
    var answer=currQuestion.answer

    currQuestion.choices.forEach(function(option,i){
        
        var choiceIndex=document.createElement("button")
        console.log(choiceIndex)
        choiceIndex.setAttribute("value", option)
        choiceIndex.textContent=i+1+". "+ option;
        // checks to see if the answer clicked is true
        if (option===currQuestion.answer){
            choiceIndex.dataset.correct=true;
            
        }
        choiceIndex.addEventListener("click",function(event){
            answerClick(event.target);
            
            
        })
        choices.appendChild(choiceIndex)
        // this actually adds the choices onto the webpage
    }

    function answerClick(selectedChoice){
        if (selectedChoice===answer){
            console.log("correct")
            questionNumber++
            
        }else{
            timerCount-5;
        }
        console.log("it works")


    }

    
    document.body.appendChild(choices)
}
// this function will be called if the user does not finish in the alotted time
function timesUp(){
    gameOver.textContent= "Too slow!"
    if (timerCount===0){
        clearInterval(timer);
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

