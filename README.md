##Word Scramble Game
Overview
This Word Scramble Game is a fun and educational game where players try to unscramble words within a limited number of guesses. Players can play two levels:

Level 1 (Basic): Words are easier, familiar, and shorter.
Level 2 (Hard): Words are more advanced and challenging.
Players have two lives per word, and each correct guess increases their score. Once all guesses are exhausted, the game ends, and the player's final score is displayed.

Features
Two Levels: Basic and Hard word lists.
Scrambled Words: The game scrambles the letters of the selected word randomly for the player to guess.
Life Lines: Players get two lives per word to guess correctly.
Score Tracking: Players’ scores are tracked and updated with every correct guess.
End Game Message: The game displays the player's final score and offers an option to reset the game.
Files
index.html: The HTML structure of the game, including buttons, input fields, and areas to display words and scores.
styles.css: Contains the styling for the game layout, buttons, text, and colors.
app.js: Contains the JavaScript logic for the game, including word selection, shuffling, score updates, and game reset functionality.
How to Play
Start the Game:

Click the "Start" button to begin the game.
The game will show a scrambled word from the Basic level.
Guess the Word:

Enter your guess in the input field and click the "Guess" button.
You have two attempts (lives) per word. If you guess correctly, your score increases. If you fail both attempts, the game moves to the next word.
Winning or Losing:

If you guess correctly, your score will increase, and a new word will appear.
If you run out of lives for a word, the game will show the correct answer and give you the next word.
The game ends once all lives are used or you decide to quit.
Restart the Game:

Click the "Reset" button to restart the game from the beginning.
Game Logic
The game randomly selects a word from a predefined list of words, scrambles its letters, and presents it to the player. The player must then guess the correct word within two attempts (lives). If guessed correctly, the score increases. The game continues with new words until the player runs out of lives.

Technical Implementation
HTML Elements
Start Button: Begins the game by showing the scrambled word.
Guess Input: Players input their guessed word here.
Guess Button: Submits the player's guess for evaluation.
Reset Button: Resets the game to its initial state.
Score Display: Displays the player's current score.
Level Display: Displays the current difficulty level (Basic or Hard).
Word Scramble Display: Shows the scrambled word to the player.
JavaScript Logic
Random Word Selection:

The game selects a word randomly from the word list (either basic or hard).
Word Scrambling:

The selected word is scrambled using split(), sort(), and join() methods to randomize the letters.
Guess Evaluation:

The player's input is compared to the original word. If correct, the score increases. If incorrect, a life is deducted.
Life Tracking:

The player has two lives per word. If both lives are lost, the game reveals the word and moves to the next one.
End Game:

Once all lives are used, the game shows the final score and an option to restart the game.
Setup Instructions
Download or clone the repository.
Open the index.html file in any modern web browser.
Play the game by following the instructions provided above.
Requirements
A modern web browser that supports HTML5, CSS3, and JavaScript.
Future Enhancements
Adding a timer for each word to increase difficulty.
Introducing a leaderboard to track high scores.
Providing a toggle to switch between the Basic and Hard levels during gameplay.
Enjoy the game!
