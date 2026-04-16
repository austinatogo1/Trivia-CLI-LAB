// Import readline for CLI interaction
const readline = require("readline");

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question: "What is the capital of Kenya?",
    options: ["A. Nairobi", "B. Mombasa", "C. Kisumu", "D. Nakuru"],
    answer: "A"
  },
  {
    question: "Which language runs in the browser?",
    options: ["A. Python", "B. Java", "C. JavaScript", "D. C++"],
    answer: "C"
  },
  {
    question: "What does CLI stand for?",
    options: ["A. Command Line Interface", "B. Code Language Input", "C. Computer Logic Interface", "D. Control Line Input"],
    answer: "A"
  }
];

let score = 0;
let currentQuestionIndex = 0;
let totalTime = 30; // total quiz time (seconds)
let timer;

// TIMER FUNCTION (Async Feature)
function startTimer() {
  timer = setInterval(() => {
    totalTime--;
    process.stdout.write(`\r Time Left: ${totalTime}s `);

    if (totalTime <= 0) {
      console.log("\n Time's up!");
      endGame();
    }
  }, 1000);
}

// START GAME FUNCTION
function startGame() {
  console.log("🎮 Welcome to the Trivia Game!");
  console.log("You have 30 seconds to answer all questions.\n");

  startTimer();
  askQuestion();
}

// ASK QUESTION FUNCTION
function askQuestion() {
  if (currentQuestionIndex >= questions.length) {
    return endGame();
  }

  const currentQ = questions[currentQuestionIndex];

  console.log(`\n Question ${currentQuestionIndex + 1}:`);
  console.log(currentQ.question);

  // Array iteration method (forEach)
  currentQ.options.forEach(option => console.log(option));

  rl.question("Your answer (A/B/C/D): ", (userInput) => {
    checkAnswer(userInput.trim().toUpperCase());
  });
}

// CHECK ANSWER FUNCTION
function checkAnswer(userAnswer) {
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    console.log(" Correct!");
    score++;
  } else {
    console.log(` Incorrect! Correct answer: ${correctAnswer}`);
  }

  currentQuestionIndex++;
  askQuestion();
}

// END GAME FUNCTION
function endGame() {
  clearInterval(timer);

  console.log("\n Game Over!");
  console.log(`Your Score: ${score} / ${questions.length}`);

  // Using array method (map) for summary
  const summary = questions.map((q, index) => {
    return `Q${index + 1}: ${q.answer}`;
  });

  console.log("\n Answer Summary:");
  summary.forEach(item => console.log(item));

  rl.close();
}

// START PROMPT
rl.question("Press ENTER to start the quiz...", () => {
  startGame();
});