const questions = [
    {
        question: "Which word is a synonym for 'happy'?",
        answers: [
            { text: "Sad", correct: false },
            { text: "Joyful", correct: true },
            { text: "Angry", correct: false },
            { text: "Tired", correct: false }
        ]
    },
    {
        question: "What is the opposite of 'hot'?",
        answers: [
            { text: "Cold", correct: true },
            { text: "Warm", correct: false },
            { text: "Wet", correct: false },
            { text: "Dry", correct: false }
        ]
    },
    {
        question: "Choose the correct spelling: 'Recieve' or 'Receive'?",
        answers: [
            { text: "Recieve", correct: false },
            { text: "Receive", correct: true }
        ]
    },
    {
        question: "What does 'benevolent' mean?",
        answers: [
            { text: "Kind and generous", correct: true },
            { text: "Cruel and mean", correct: false },
            { text: "Lazy", correct: false },
            { text: "Smart", correct: false }
        ]
    },
    {
        question: "Read the sentence: 'The cat sat on the mat.' What is the verb?",
        answers: [
            { text: "The", correct: false },
            { text: "Cat", correct: false },
            { text: "Sat", correct: true },
            { text: "Mat", correct: false }
        ]
    }
];

// ...existing code...

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove('hide');
    resultsElement.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        showResults();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showResults() {
    document.getElementById('quiz-container').classList.add('hide');
    resultsElement.classList.remove('hide');
    scoreElement.innerText = `Your score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

restartButton.addEventListener('click', startQuiz);

startQuiz();
