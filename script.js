var questionNumber=0;
var choices=document.querySelector("#choices");
var question1=document.querySelector("#question-1");
var question2=document.querySelector("#question-2");
var question3=document.querySelector("#question-3");
var question4=document.querySelector("#question-4");
var question5=document.querySelector("#question-5");
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
var timerElement=document.querySelector(".timer");
// added var for timer element
var next=document.querySelector("#next");
// var for next button
// var timerCount=60;
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
    }

];

// using Show to show the questions as the user clicks the button
function startGame(){
    // questionContainer.removeAttribute("class");
    timerCount=60;
    startTimer();
    showQuestion()
}
// function to append questions to page
function showQuestion(){
    var currQuestion=questionBank[questionNumber]
    var questionTitle=document.getElementById("questionHeader")
    questionTitle.textContent=currQuestion.question;
    choices.innerHTML="";

    // loop through questions and choices
    currQuestion.choices.forEach(function(option,i){
        var choiceIndex=document.createElement("button")
        // choice index.setAttribute("class","buttonClass")
        choiceIndex.setAttribute("value", option)
        choiceIndex.textContent=i+1+". "+option;
        // choiceIndex.onclick=optionChosen;
        choices.appendChild(choiceIndex)
    })
    console.log('these aremy choices', choices)
}
// this function will be called if the user does not finish in the alotted time
function timesUp(){
    wordBlank.textContent= "Times Up!"
}
// this function is meant to start the timer and show the questions when the user clicks the start button
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
// start.addEventListener("click",function startGame(){
//     timerElement=setInterval(function(){
//         timerCount--;
//         timerElement.textContent=timerCount + "seconds left!"
//         if (timerCount=0){
//             TimesUp();
//         }
        
//         // function show(){
//         //         document.getElementById("ul").style.display="block"; 
//         // }

//         // show();

//     })
// }) 

