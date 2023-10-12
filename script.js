var questionNumber=0;
var gameOver=document.querySelector("#gameOver");
var choices=document.querySelector("#choices");
// added var with queryselector for each question
var questionContainer=document.querySelector(".questions");
var answer1=document.querySelector("#answer-1");
var answer2=document.querySelector("#answer-2");
var answer3=document.querySelector("#answer-3");
var answer4=document.querySelector("#answer-4");
var answer5=document.querySelector("#answer-5");
// added var for all answers
var start=document.querySelector("#start-button");
// added var for start button
var timerElement=document.querySelector("#timer");
// added var for timer element
var next=document.querySelector("#next");
// bank for all questions and answers
var timerCount=10;
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
        choices:["Strings","Booleans","Alerts","Numbers"]
    }

];

// using Show to show the questions as the user clicks the button
// function to append questions to page
function showQuestion(){
    var currQuestion=questionBank[questionNumber]
    var questionTitle=document.getElementById("questionHeader");
    questionTitle.textContent=currQuestion.question;
    choices.innerHTML="";
    
    // for (var i=0; i<currQuestion.choices.length;i++){
    //     var choices=currQuestion.choices[i];
    //     var choiceBtn=document.createElement("button");
    //     choiceBtn.setAttribute("class","choice");
    //     choiceBtn.setAttribute("value", choice);
    //     choiceBtn.textContent= i + 1 + ". " + choice;
    //     choices.appendChild(choiceBtn);
    // }
    // loop through questions and choices
    currQuestion.choices.forEach(function(option,i){
        var choiceIndex=document.createElement("button")
       
        choiceIndex.setAttribute("value", option)
        choiceIndex.textContent=i+1+". "+ option;
        choices.appendChild(choiceIndex)
    })
    // console.log('these are my choices', choices)
}
// this function will be called if the user does not finish in the alotted time
function timesUp(){
    gameOver.textContent= "Too slow!"
    if (timerCount===0){
        clearInterval(timer);
    }
}
function startGame(){
    timerCount=10;
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
            console.log("timer")
       }
    //    timer keeps going into the negative

    },1000);
}

