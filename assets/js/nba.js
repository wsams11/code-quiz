// list out all possible variables 
var questions = [
    {
      title: "What famous basketball player won 6 NBA championships with the Chicago Bulls",
      choices: ["Stephen Curry", "Lebron James", "Kobe Bryant", "Michael Jordan"],
      answer: "Michael Jordan",
    },
    {
      title: "What famous basketball player was the first player to be voted unanimous MVP", 
      choices: ["Stephen Curry", "Lebron James", "Kobe Bryant", "Michael Jordan"],
      answer: "Stephen Curry",
    },
    {
      title: "What famous basketball player once scored 81 points in a single game", 
      choices: ["Stephen Curry", "Lebron James", "Kobe Bryant", "Michael Jordan"],
      answer: "Kobe Bryant",
    },
    {
      title: "What famous basketball player brought the first professional championship to the state of Ohio?", 
      choices: ["Stephen Curry", "Lebron James", "Kobe Bryant", "Michael Jordan"],
      answer: "Lebron James",
    },
  ];
var questionList = document.getElementById("question-list");
var counter = document.getElementById("counter");
var startBtn = document.getElementById("start-btn");
var highScoreBtn = document.getElementById("high-scores-btn");
var compQuestion = document.getElementById("question");
var li = document.getElementsByTagName("li").textContent;
var buttonDiv = document.querySelector(".buttons");
var submitBtn = document.getElementById("submit");
var nameInput = document.getElementById("highScoreInput");
var highScoreList = document.getElementById("highscore-list");
var highScoreTitle = document.getElementById("scoreTitle");
var i = 0;
var timeleft = 75;

var title = questions[i].title;
var choices = questions.choices;
var answer = questions[i].answer;
var userScore = [];
var finalScore = "";
function startTimer() {
    var downloadTimer = setInterval(function () {
        counter.style.color = "white";
        timeleft--;
        counter.textContent = timeleft;
        if (timeleft <= 10) {
            counter.style.color = "red";
        }
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
        }
        if (i === questions.length) {
            clearInterval(downloadTimer);
        }
    }, 1000);
}
function questionGen() {
    // var i = 0;
    if (questions[i].title === null) {
    }
    compQuestion.textContent = questions[i].title;
    for (let n = 0; n < 4; n++) {
        var li = document.createElement("li");
        li.textContent = questions[i].choices[n];
        li.setAttribute("data-index", n);
        questionList.appendChild(li);
    }
}
function myScore() {
    submitBtn.style.display = "inline-block";
    nameInput.style.display = "inline-block";
    nameInput.value = "";
    question.innerHTML = "You're Score: <br />" + timeleft;
}
function storeHighScore() {
    scores = {name: nameInput.value.trim().toUpperCase(), score: timeleft + 1 };
    userScore.push(scores);
    userScore.sort(function (a, b) {return b.score - a.score});
    localStorage.setItem("userScore", JSON.stringify(userScore));
    let element = JSON.parse(localStorage.getItem("userScore"));
    var topThree = element.slice(0, 3);
    console.log(topThree);
    for (var x = 0; x < topThree.length; x++) {
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        if (userScore[x].name === "") {
            li.textContent = "player " + (x+1);
        } else {
        li.textContent = userScore[x].name;
        }
        highScoreList.appendChild(li);
        
        var span = document.createElement("span");
        span.setAttribute("class", "badge badge-primary badge-pill")
        span.textContent = userScore[x].score;
        li.appendChild(span);
        }
        highScoreList.style.display = "inline-block";
}
questionList.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("li") === true) {
        var index = element.textContent;
        if (index === questions[i].answer) {
            element.style.backgroundColor = "green";
            element.style.color = "white";
            element.style.border = "3px solid white";
            setTimeout(function () {
                var child = questionList.lastElementChild;
                while (child) {
                    questionList.removeChild(child);
                    child = questionList.lastElementChild;
                }
                i++;
                compQuestion.textContent = "";
                // timeleft = timeleft + 2;
                if (i === questions.length) {
                    counter.style.display = "none";
                    myScore();
                } else {
                    questionGen();
                }
                }, 2000)
        }
        else {
            element.style.backgroundColor = "red";
            timeleft = timeleft - 5;
            element.style.color = "white";
        }
    }
});
startBtn.addEventListener("click", function () {
    startTimer();
    questionGen();
    startBtn.style.display = "none";
    highScoreBtn.style.display = "none";
    var child = highScoreList.lastElementChild;
    counter.style.display = "block";
    while (child) {
        highScoreList.removeChild(child);
        child = highScoreList.lastElementChild;
    }
    highScoreTitle.style.display = "none";
});
submitBtn.addEventListener("click", function () {
    // event.defaultPrevented;
    if (nameInput === "") {
        return;
    }
    i = 0;
    storeHighScore();
    question.textContent = "Top 10 High Scores"
    submitBtn.style.display = "none";
    nameInput.style.display = "none";
    question.innerText = "Play again?";
    startBtn.style.display = "inline-block";
    // highScoreBtn.style.display = "inline-block";
    timeleft = 75;
    highScoreTitle.style.display = "block";    
});