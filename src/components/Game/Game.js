import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import ShowBanner from "../ShowBanner/ShowBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Set up new state for a list of guesses that contains all the guesses (set up at Game component level so we can pass this as props into the GuessResult component to be rendered) 🌟 GuessResult component doesn't need to be able to set the list of guesses, it only needs to read and render them. Therefore, we only pass the list state as props into the GuessResult component (without the setGuesses function)
  const [guesses, setGuesses] = React.useState([]);

  // Set up game status to track as state: 'running', 'win', 'lose'
  const [status, setStatus] = React.useState("running");

  function handleSubmitGuesses(guess) {
    // Set a list of user guesses by using spread operator [...currentlist, newGuess] to the list state
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    // Check game status which ends the game if winning or losing condition is met, and pass status it into GuessInput to render dynamically.
    if (guess === answer) {
      setStatus("win");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lose");
    }
  }

  return (
    <>
      {/* Pass randomly generated answer as props all the way to Guess component where we invoke the checkGuess function */}
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} status={status} />
      {status !== "running" && (
        <ShowBanner
          status={status}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
