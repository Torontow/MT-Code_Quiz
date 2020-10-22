var timeLeft = 0;
var countEl = document.getElementById("count");
var startEl = document.getElementById("start");
console.log(countEl);

function startTimer() {
    timeLeft = 60;
    var timer = setInterval(function() {
        timeLeft--; 
        countEl.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(timer);
                // gameOver();
            }
        }, 1000);
}

startEl.addEventListener("click", startTimer);




