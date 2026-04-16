#  CLI Trivia Game

##  Overview

This is a **Command Line Interface (CLI) Trivia Game** built using JavaScript (Node.js).
The application allows users to answer a series of quiz questions, receive immediate feedback, and track their performance within a timed session.

---

##  Features

* ✅ Interactive CLI-based gameplay
* ✅ Sequential question display
* ✅ Real-time answer validation (correct/incorrect feedback)
* ✅ Score tracking system
* ✅ Countdown timer (asynchronous JavaScript)
* ✅ Answer summary at the end of the game
* ✅ Input validation for better user experience

---

##  Technologies Used

* JavaScript (Node.js)
* Readline module (for CLI interaction)

---

##  Project Structure

```
trivia-game/
│── trivia.js   # Main game file
│── README.md   # Project documentation
```

---

##  How to Run the Game

1. Install Node.js (if not already installed)
2. Clone or download the project
3. Open terminal in the project directory
4. Run the following command:

```
node trivia.js
```

5. Press **ENTER** to start the game

---

##  How It Works

1. The user starts the game from the CLI
2. Questions are displayed one at a time
3. The user selects an answer (A/B/C/D)
4. The program:

   * Validates the answer
   * Provides immediate feedback
5. A timer runs throughout the game
6. At the end:

   * Final score is displayed
   * Correct answers summary is shown

---

##  Timer Functionality

* The game includes a countdown timer using `setInterval`
* Users must complete the quiz before time runs out
* If time reaches zero, the game ends automatically

---

##  JavaScript Concepts Used

* Functions (modular design)
* Arrays & Objects (question storage)
* Array methods (`forEach`, `map`)
* Asynchronous JavaScript (`setInterval`)
* Conditional logic
* User input handling via `readline`

---

##  Example Output

```
 Welcome to the Trivia Game!

 Question 1:
What is the capital of Kenya?
A. Nairobi
B. Mombasa
C. Kisumu
D. Nakuru

Your answer: A
 Correct!
```

---

##  Error Handling

* Prevents invalid inputs (only accepts A/B/C/D)
* Handles timer expiration safely
* Ensures smooth question flow

---

##  Future Improvements

* Difficulty levels (Easy/Medium/Hard)
* Randomized question order
* Per-question timer
* Leaderboard system
* Persistent score storage

---

##  Conclusion

This project demonstrates the use of **core JavaScript concepts**, including asynchronous programming, user interaction, and data handling, to build a functional and user-friendly CLI trivia game.

---
