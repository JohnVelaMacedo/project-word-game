import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert('Please enter exactly 5 characters. 😁');
      return;
    }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='guess-input-wrapper'
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        required
        maxLength={5}
        minLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={tentativeGuess}
        onChange={(e) =>
          setTentativeGuess(e.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default GuessInput;
