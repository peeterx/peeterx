
const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNumber = document.querySelector(".current-question-number");
const description = document.querySelector(".description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const seeResultsBtn = document.querySelector(".see-results-btn");
const correctAnswers = document.querySelector(".correct-answers");

let questionIndex = 0;

let score = 0;
let number = 0;
let myArray = [];

myApp = [
  {
    question: "how many countries still have the shilling as currency?",
    options: ["4", "1", "10", "none"],
    answer: 0,
    description: "the countries are <b>Kenya, Uganda, Tanzania</b> &amp; <b>Somalia</b>."
  },
  {
    question: "what is the largest country in the world?",
    options: ["Nigeria", "USA", "Russia", "Canada"],
    answer: 2,
  },
  {
    question: "what is the hottest continent on earth?",
    options: ["North America", "Africa", "Asia", "South America"],
    answer: 1,
  },
  {
    question: "which is the longest river in the world?",
    options: ["Mississippi River", "River Tana", "River Senegal", "River Nile"],
    answer: 3,
  },
  {
    question: "which is the vowel not used as the first letter in a US state?",
    options: ["a", "i", "o", "e"],
    answer: 3,
    description: "<b>a</b> is used for <b>Arizona</b>, <b>i</b> for <b>Illinois</b>, <b>o</b> for <b>Ohio</b>",
  }
];

function load() {
  number ++;
  questionText.innerHTML = myApp[questionIndex].question;
  createOptions();
  scoreBoard();
  currentQuestionNumber.innerHTML = number + " / " + myApp.length;
}

function createOptions() {
  optionBox.innerHTML = "";

  let animationDelay = 0.2;

  for (var i = 0; i < myApp[questionIndex].options.length; i++) {
    const option = document.createElement("div");
          option.innerHTML = myApp[questionIndex].options[i];
          option.classList.add("option");
          option.id = i;
          option.style.animationDelay = animationDelay + "s";
          animationDelay = animationDelay + 0.2;
          option.setAttribute("onclick", "check(this)");
          optionBox.appendChild(option);
  }
}

function generateRandomQuestion() {
  const randomNumber = Math.floor(Math.random() * myApp.length);
  let hitDuplicate = 0;

  if (myArray.length == 0) {
    questionIndex = randomNumber;
  }
  else {
    for (var i = 0; i < myArray.length; i++) {
      if (randomNumber == myArray[i]) {
        hitDuplicate = 1;
      }
      if (hitDuplicate == 1) {
        generateRandomQuestion();
        return;
      }
      else {
        questionIndex = randomNumber;
      }
    }
  }
  myArray.push(randomNumber);
  console.log(myArray);
  load();
}
function check(ele) {
  const id = ele.id;
  if (id == myApp[questionIndex].answer) {
    ele.classList.add("correct");
    score ++;
    scoreBoard();
  }
  else {
    ele.classList.add("wrong");
  }
  disableOptions();
  showDescription();
  showNextQuestionBtn();
  //showSeeResultsBtn();

  if (number == myApp.length) {
    quizOver();
  }
}

function disableOptions() {
  for (var i = 0; i < optionBox.children.length; i++) {
    optionBox.children[i].classList.add("already-answered")
  }
}

function showDescription() {
  if (typeof myApp[questionIndex].description !== 'undefined') {
    description.classList.add("show");
    description.innerHTML = myApp[questionIndex].description;
  }
}

function hideDescription() {
  description.classList.remove("show");
  description.innerHTML = "";
}

function showNextQuestionBtn() {
  nextQuestionBtn.classList.add("show");
}

function hideNextQuestionBtn() {
  nextQuestionBtn.classList.remove("show");
}

/*function showSeeResultsBtn() {

}*/

function scoreBoard() {
  correctAnswers.innerHTML = score;
}

nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
  questionIndex ++;
  generateRandomQuestion();
  hideDescription();
  hideNextQuestionBtn();
}

function quizOver() {
  nextQuestionBtn.classList.remove("show");
  seeResultsBtn.classList.add("show");
}

window.onload = () => {
  // load();
  generateRandomQuestion();
}
