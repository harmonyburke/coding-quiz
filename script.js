var question1=document.querySelector("#question-1");
var question2=document.querySelector("#question-2");
var question3=document.querySelector("#question-3");
var question4=document.querySelector("#question-4");
var question5=document.querySelector("#question-5");
// added var with queryselector for each question
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
var timer;
var timerCount;


function show(){
        document.getElementById("ul").style.display="block"; 
}
// using Show to show the questions as the user clicks the button
function startGame(){
    timerCount=60;
    start.disabled=true;
    startTimer();

}
function TimesUp(){
    wordBlank.textContent= "Times Up!"
}
// this function will be called if the user does not finish in the alotted time
start.addEventListener("click",function startTimer(){
    timer=setInterval(function(){
        timerCount--;
        timer.textContent=timerCount;
        if (timerCount=0){
            TimesUp();
        }

    })
})   