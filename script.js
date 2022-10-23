
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




// var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();

// var studentGrade = {
//   student: student.value,
//   grade: grade.value,
//   comment: comment.value.trim()
// };

// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// renderMessage();

// });

// function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent = lastGrade.student + 
//     " received a/an " + lastGrade.grade
//   }
// }


// // Selects element by class
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();



