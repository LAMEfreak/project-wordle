import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {/* To always have the grid visible no matter the no. of guesses user has made, map over a fixed array of 6 elements using the range function. Return 1 Guess component for each element and pass the corresponding guess to the component as props

      Essentially this generates the 6 rows
      */}

      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guesses[num]} />;
      })}
    </div>
  );
}

export default GuessResult;
