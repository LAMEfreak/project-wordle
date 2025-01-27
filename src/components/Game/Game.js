import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import ShowBanner from "../ShowBanner/ShowBanner";

// Test comment

// Pick a random word on every pageload.
// const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  // Set up new state for a list of guesses that contains all the guesses (set up at Game component level so we can pass this as props into the GuessResult component to be rendered) 🌟 GuessResult component doesn't need to be able to set the list of guesses, it only needs to read and render them. Therefore, we only pass the list state as props into the GuessResult component (without the setGuesses function)
  const [guesses, setGuesses] = React.useState([]);

  // Set up game status to track as state: 'running', 'win', 'lose'
  const [status, setStatus] = React.useState("running");

  // Since we need to restart the game in-app without refreshing, move random word generation into React state. Pass state and setState function as props through to RestartButton component (through ShowBanner component)
  const [correctAnswer, setCorrectAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  console.info({ correctAnswer });

  // State to store no. of consecutive wins
  const [consecutiveWins, SetConsecutiveWins] = React.useState(0);

  function handleSubmitGuesses(guess) {
    // Set a list of user guesses by using spread operator [...currentlist, newGuess] to the list state
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    // Check game status which ends the game if winning or losing condition is met, and pass status it into GuessInput to render dynamically.
    if (guess === correctAnswer) {
      setStatus("win");
      SetConsecutiveWins(consecutiveWins + 1);
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lose");
      SetConsecutiveWins(0);
    }
  }

  return (
    <>
      <div className="streak">
        <p>Current Streak:</p>
        <span className={`span-${consecutiveWins === 0 ? "empty" : "positive"}`}>
          {consecutiveWins}
        </span>
      </div>
      {/* Pass randomly generated answer as props all the way to Guess component where we invoke the checkGuess function */}
      <GuessResult guesses={guesses} answer={correctAnswer} />
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} status={status} />
      {status !== "running" && (
        <ShowBanner
          status={status}
          numOfGuesses={guesses.length}
          correctAnswer={correctAnswer}
          setCorrectAnswer={setCorrectAnswer}
          setStatus={setStatus}
          setGuesses={setGuesses}
        />
      )}
    </>
  );
}

export default Game;
