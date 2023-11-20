import React from "react";

function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {/* Map over guess items and return one pargraph item for each Object, extracting its value and setting the unique id as the key */}
      {guesses.map((guess, index) => {
        return (
          <p key={index} className="guess">
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResult;
