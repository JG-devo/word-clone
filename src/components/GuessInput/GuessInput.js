import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function submitHandler(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess('');
  }

  return (
    <form onSubmit={submitHandler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        value={tentativeGuess}
        pattern={'[A-Za-z]{5}'}
        maxLength={5}
        title="Needs to be a word with exactly 5 characters"
        onChange={event => setTentativeGuess(event.target.value.toUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
