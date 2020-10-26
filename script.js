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
    "1":"Client-side",
    "2":"Server-side",
    "3":"Local",
    "4":"Native",
    "ans":"1"},
    // 2
    {"q":"How does JavaScript store dates in a date object?",
    "1":"In days since January 1, 1900.",
    "2":"In milliseconds since January 1, 1970.",
    "3":"In seconds since Netscape's public stock offering.",
    "4":"In hours since the first full-stack bootcamp course began.",
    "ans":"2"},
    // 3
    {"q":"Which of the following is not a valid JavaScript variable name?",
    "1":"twoNames",
    "2":"Twonames",
    "3":"2names",
    "4":"two-names",
    "ans":"3"},
    // 4
    {"q":"This type of statement tests for a specific condition.",
    "1":"For",
    "2":"If",
    "3":"Switch",
    "4":"Select",
    "ans":"2"},
    // 5
    {"q":"What does the keyword 'this' mean?",
    "1":"It refers to the current object.",
    "2":"It refers to the previous object.",
    "3":"It is a variable that contains a value",
    "4":"It calls a function.",
    "ans":"1"},
    // 6
    {"q":"What is the correct syntax for referring to an external script called 'xyz.js'?",
    "1":"<script href='xyz.js'>",
    "2":"<script name='xyz.js'>",
    "3":"<script src='xyz.js'>",
    "4":"<script rel='xyz.js>",
    "ans":"3"},
    // 7
    {"q":"Given the array ['wolf','bat','mist'], the index of 'wolf' is:",
    "1":"-1",
    "2":"0",
    "3":"1",
    "4":"2",
    "ans":"2"},
    // 8
    {"q":" If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    "1":"New Text",
    "2":"para1.value='New Text'",
    "3":"para1.firstChild.nodeValue= 'New Text'",
    "4":"para1.nodeValue='New Text'",
    "ans":"2"},
    // 9
    {"q":"The language to make writing JS more neatly and concisely is called:",
    "1":"Bootstrap",
    "2":"GitLab",
    "3":"Apostol",
    "4":"jQuery",
    "ans":"4"},
    // 10
    {"q":"API stands for",
    "1":"Application Program Interface.",
    "2":"Apple Programming Inventiveness.",
    "3":"Applicant Public Intervention",
    "4":"Apple Pumpkin Ingenuity",
    "ans":"1"},
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
    // Writes the quiz questions to the document.
    for (var i=0; i<questions.length; i++) {
        questionEl.innerHTML = questions[i].q;
        answerEl.innerHTML = "";
        console.log(questions[i]);
        for (var j=0; j<5; j++) {
            var choice = document.createElement("div");
            choice.setAttribute("class","choice");
            choice.setAttribute("id",j);
            choice.textContent = questions[i][j];
            answerEl.appendChild(choice);                
            var correctAns = questions[i].ans;
            choice.addEventListener("click", function(event) {
                var elIndex = event.target.id;
                event.stopPropagation();
                if (elIndex == correctAns){
                    console.log("Right!");
                } else {
                    console.log("Wrong!");
                    timeLeft = timeLeft-5;
                }          
            })
        }    
    }
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


    




