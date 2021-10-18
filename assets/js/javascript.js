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
    },
    {
        question: 'Arrays in JavaScript can be used to store _______',
        answers: [
            {text:'1. numbers and strings', correct: false},
            {text:'2. other arrays', correct: false},
            {text:'3. boolean', correct: false},
            {text:'4. all of the above', correct: true},
        ]
    },
    {
        question: 'The condition in an if/else is contained by ______',
        answers: [
            {text: '1. parenthesis', correct: true},
            {text: '2. curly brackets', correct: false},
            {text: '3. brackets', correct: false},
            {text: '4. square brackets', correct: false},
        ]
    },
    {
        question: 'JavaScript is an example of object-orientated language:',
        answers: [
            {text: 'True', correct:true},
            {text: 'False', correc:false},
        ]
    },
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

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    setTimeout(function(){
        if (correct) {
            score = score + 10
        } else{
            score = score - 10
        };
        currentQuestionIndex++
        setNextQuestion()
    }, 2000);
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
    
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
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