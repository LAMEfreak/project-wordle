import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Define restart function that (1) generates new random word and set answer state to this new word (2) restart the game status to "running" (3) clear the array of guesses so the cells become empty
function RestartButton({ setCorrectAnswer, setStatus, setGuesses }) {
  function handleRestartRound() {
    const nextWord = sample(WORDS);
    setCorrectAnswer(nextWord);
    setStatus("running");
    setGuesses([]);
  }
  return (
    <button className="restart" onClick={handleRestartRound}>
      Restart
    </button>
  );
}

export default RestartButton;
