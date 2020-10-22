// Starting variables
var startEl = document.getElementById("start");

// Timer variables
var timeLeft = 0;
var countEl = document.getElementById("count");

// Sets a timer for the quiz. 
function startTimer() {
    timeLeft = 60;
    var timer = setInterval(function() {
        timeLeft--; 
        countEl.textContent = timeLeft;

            if (timeLeft == 0) {
                clearInterval(timer);
                // gameOver();
            }
        }, 1000);
}

function quizMe() {
    console.log("run() ran.");
// -while (timeLeft > 0) {
    // -for loop for number of questions: 
        // -show a question from a list and put it in question text field
        // -show multiple choice answers to corresponding question (answer div)
        // -when an answer is clicked
            // -if correct (true): show card with "correct" styling for 1 second
            // -else subtract 3 from timeLeft and display "incorrect" card for 1 second
    // -clearInterval(timer)
    // -console.log(timeLeft)
    gameOver();
}

function gameOver() {
    console.log("gameOver() ran.");
// -Displays your score
// -asks to enter initials for score
// -updates leaderboard content
}

// Start Button 
startEl.addEventListener("click",startTimer);
startEl.addEventListener("click",quizMe);


    




