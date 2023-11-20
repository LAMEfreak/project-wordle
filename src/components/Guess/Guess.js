import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

// Mini cell component. Ternary operator: If there is a word, render each of the characters dynamically in a span element and apply class. Otherwise, it is undefined (no character is shown and the cell is empty).
function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  // Import checkGuess function and receive value of randomly generated answer from Game component as props
  const result = checkGuess(value, answer);

  return (
    // We use range(5) because it's an inherent assumption that we are ONLY working with words comprising 5 letters.

    // Map over array of 5 elements and generate a Cell component for each letter. Pass the letter from result of CheckGuess as a prop (if no letter yet, return undefined)
    <p className="guess">
      {range(5).map((index) => {
        return (
          <Cell
            key={index}
            letter={result ? result[index].letter : undefined}
            status={result ? result[index].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
