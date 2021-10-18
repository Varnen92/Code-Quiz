var score = 0;

var question = document.getElementById("question");

let questions = [
    {
        
    }
]

var hideText = function() {
    document.getElementById('mainbody').style.visibility = 'hidden';
}



var countdownTimer = function(){
    var counter = 60;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("countdown");
            span.innerHTML = "Time Remaining: " + counter;
        }
        if (counter === 0) {
            alert("sorry, out of time!");
            clearInterval(counter);
        }
    }, 1000);

};


document.getElementById("start").addEventListener("click", countdownTimer)
document.getElementById("start").addEventListener("click", hideText)