var score = 0;

const startButton = document.getElementById('start')
const body = document.getElementById('mainbody')
const questionContainerElement = document.getElementById('question-container')



let questions = [
    {
        
    }
]

/* var hideText = function() {
    document.getElementById('mainbody').style.visibility = 'hidden';
}
 */

function startGame() {
    body.classList.add('hide')
    questionContainerElement.classList.remove('hide')

}

function selectAnswer(){

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

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', countdownTimer)