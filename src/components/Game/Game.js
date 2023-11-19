import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Set up new state for a list that contains all the guesses (set up at Game component level so we can pass this as props into the GuessResult component to be rendered) 🌟 GuessResult component doesn't need to be able to set the list of guesses, it only needs to read and render them. Therefore, we only pass the list state as props into the GuessResult component (without the setList function)
  const [list, setList] = React.useState([]);

  function handleSubmitGuesses(guess) {
    // Create guessWithID Object and append a unique ID for the key prop in addition to the user's guess. Set a list of user guesses by using spread operator [...currentlist, newItem] to the list state
    const guessWithID = {
      id: crypto.randomUUID(),
      value: guess,
    };
    const nextList = [...list, guessWithID];
    setList(nextList);
    console.log(nextList);
  }
  return (
    <>
      <GuessResult list={list} />
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
