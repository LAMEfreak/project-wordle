import React from "react";

function ShowBanner({ status, numOfGuesses, answer }) {
  // Create a ShowBanner component that checks for the game status and returns a banner with a happy or sad banner based on the game's outcome.

  // Had to pass in as props (1) the randomly generated correct answer to show the message in the banner and (2) guesses array to extract the no. of guesses to show in the correct banner message
  const happyMessage = (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}</strong>.
    </p>
  );

  const sadMessage = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
  return (
    <div className={`${status === "win" ? "happy" : "sad"} banner`}>
      {status === "win" ? happyMessage : sadMessage}
    </div>
  );
}

export default ShowBanner;