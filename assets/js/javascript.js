var score = 0;

const startButton = document.getElementById('start')
const body = document.getElementById('mainbody')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex

const questions = [
    {
        question: 'When was JavaScript introduced?',
        answers: [
            {text: '1990', correct: false},
            {text: '1995', correct: true},
            {text: '1997', correct: false},
            {text: '1998', correct: false}

        ]
    }
]

function startGame() {
    body.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)

    }
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
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