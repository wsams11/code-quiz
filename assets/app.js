// list out all possible variables 
var questions = [
    {
        title: "What does HTML stand for?",
        choices: [
            "HyperText Markup Language", "HyperTalented Makeup Licensing", "HelloTom Maybe Later", "HyperText Markup Licensing"
        ],
        answer: "HyperText Markup Language",
    },
    {
        title: "What does CSS stand for?",
        choices: "Cascading Style Sheets, Cascade Skating Spot, Curious Scary Socks, Charlie Sierra Sierra",
        answer: "Cascading Style Sheets",
    },
    {
        title: " ___ has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
        choices: "Javascript, Jackson 5, HTML, CSS",
        answer: "JavaScript",
    },
    {
        title: "___ has the best coding bootcamp!",
        choices: "UofA, Flatiron, DevMountain, Thinkful",
        answer: "UofA",
    }
]
var intervals = (document.getElementById("time"));
// var timer = ;
var questionIndex = 0;
var $startPrompt = document.getElementById("start-prompt");
var $quiz = document.getElementById("quiz")
var $startQuiz = document.getElementById("button")
var $timer = (document.getElementById("time"));
var $question = document.getElementById("question");
var $answersDiv = document.getElementById("answers");


// what is the next steps? target button for on click listener
// on button click have timer start
document.getElementById("button").addEventListener('click', function (e) {
    // hide start prompt div
    $startPrompt.classList.add("d-none");
    // show quiz div
    $quiz.classList.remove("d-none");
    // render question
    renderQuestion();
    // create question function
})

function renderQuestion() {
    if (questionIndex >= questions.length) {
        return;
    }
    var currentQuestion = questions[questionIndex];

    $question.textContent = currentQuestion.title;
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var $answer = document.createElement("div");
        $answer.textContent = currentQuestion.choices[i];
        $answer.classList.add("answer");
        $answersDiv.appendChild($answer);
    }
}

