// Starting variables
var startButton = document.getElementById("start");

// Timer variables
var timeLeft = 0;
var countEl = document.getElementById("count");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var questions = [
    // 1
     {"q":"_____ JavaScript statements in an HTML page respond to user events like mouse-clicks and form input.",
    "A":"Client-side",
    "B":"Server-side",
    "C":"Local",
    "D":"Native",
    "ans":"A"},
    // 2
    {"q":"How does JavaScript store dates in a date object?",
    "A":"In days since January 1, 1900.",
    "B":"In milliseconds since January 1, 1970.",
    "C":"In seconds since Netscape's public stock offering.",
    "D":"In hours since the first full-stack bootcamp course began.",
    "ans":"B"},
    // 3
    {"q":"Which of the following is not a valid JavaScript variable name?",
    "A":"twoNames",
    "B":"Twonames",
    "C":"2names",
    "D":"two-names",
    "ans":"C"},
    // 4
    {"q":"This type of statement tests for a specific condition.",
    "A":"For",
    "B":"If",
    "C":"Switch",
    "D":"Select",
    "ans":"B"},
    // 5
    {"q":"What does the keyword 'this' mean?",
    "A":"It refers to the current object.",
    "B":"It refers to the previous object.",
    "C":"It is a variable that contains a value",
    "D":"It calls a function.",
    "ans":"A"},
    // 6
    {"q":"What is the correct syntax for referring to an external script called 'xyz.js'?",
    "A":"<script href='xyz.js'>",
    "B":"<script name='xyz.js'>",
    "C":"<script src='xyz.js'>",
    "D":"<script rel='xyz.js>",
    "ans":"C"},
    // 7
    {"q":"Given the array ['wolf','bat','mist'], the index of 'wolf' is:",
    "A":"-1",
    "B":"0",
    "C":"1",
    "D":"2",
    "ans":"B"},
    // 8
    {"q":" If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    "A":"New Text",
    "B":"para1.value='New Text'",
    "C":"para1.firstChild.nodeValue= 'New Text'",
    "D":"para1.nodeValue='New Text'",
    "ans":"B"},
    // 9
    {"q":"The language to make writing JS more neatly and concisely is called:",
    "A":"Bootstrap",
    "B":"GitLab",
    "C":"Apostol",
    "D":"jQuery",
    "ans":"D"},
    // 10
    {"q":"API stands for",
    "A":"Application Program Interface.",
    "B":"Apple Programming Inventiveness.",
    "C":"Applicant Public Intervention",
    "D":"Apple Pumpkin Ingenuity",
    "ans":"A"},







]


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
    
    for (var i=0; i<questions.length; i++) {
    questionEl.innerHTML = (questions[i].q);
    answerEl.innerHTML = (questions[i].A);

    }


    console.log("run() ran.");
}

function gameOver() {
    console.log("gameOver() ran.");
// -Displays your score
// -asks to enter initials for score
// -updates leaderboard content
}

// Start Button 
startButton.addEventListener("click",startTimer);
startButton.addEventListener("click",quizMe);


    




