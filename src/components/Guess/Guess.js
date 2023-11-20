import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  // We use range(5) because it's an inherent assumption that we are ONLY working with words comprising 5 letters.

  // Map over array of 5 elements and generate a span element for each letter. Ternary operator: If there is a word, pass the value of each of the characters dynamically. Otherwise, it is undefined (no character is shown and the cell is empty).
  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span className="cell" key={index}>
            {value ? value[index] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
