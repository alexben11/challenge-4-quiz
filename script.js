// start the game by pressing button
var startButton = document.getElementById("start-btn");
startButton.addEventListener('click',startGame);

// show questions in container
var questionContainerElement = document.getElementById ('question-container');


function startGame () {
console.log ('Started');
//startButton.classList.add('hide');
questionContainerElement.classList.remove('hide');
setNextQuestion();
}


// select an answer
function selextAnswer () {


}


// setting next question
function setNextQuestion () {


}

var timeToStart=60;
function countDown() {
    document.getElementById("countdown").innerText= "Time: " + timeToStart;
    timeToStart--;
    if (timeToStart=== -1) {
      clearInterval(interval);
      document.getElementById("countdown").remove();
      var h5=document.createElement("h5");
      h5.innerText="Time's up!";
      document.body.appendChild(h1);
    }
}
var interval=setInterval(countDown,1000);

