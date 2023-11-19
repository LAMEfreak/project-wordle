import React from "react";

function GuessInput() {
  // Set up state for user's guess
  const [guess, setGuess] = React.useState("");

  // Function linked to event handler in Form tag => (1) Stop default behavior of page refreshing when form is submitted, (2) reset guess in input field when form is submitted

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    setGuess("");
  }

  return (
    // Linking htmlFor attribute of label tag to id attribute of input tag (htmlFor="guess-input") => Allows selecting of input field while clicking on label text. Good for accessibility especially radio buttons.
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          // value attribute makes it a controlled input, that is, managed by React
          value={guess}
          // onChange attribute: Updates 'guess' state with current input field value (uppercase) and rerender
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
          // Use regex to accept only A-Z (5 characters only), otherwise show error message
          pattern="[A-Z]{5}"
          title="Enter a 5-letter word"
          // Use required attribute to invalidate empty strings
          required="true"
        />
      </form>
    </>
  );
}

export default GuessInput;
