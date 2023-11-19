import React from "react";

function GuessResult({ list }) {
  return (
    <div className="guess-results">
      {/* Map over the list of guess Objects and return one pargraph item for each Object, extracting its value and setting the unique id as the key */}
      {list.map((item) => {
        return (
          <p className="guess" key={item.id}>
            {item.value}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResult;
