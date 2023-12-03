import { useState } from 'react';

function GameForm({ handleAddList, statusGame }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    handleAddList(text.toUpperCase());
    setText('');
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <label htmlFor='guess-input'>Enter guess:</label>

      <input
        id='guess-input'
        type='text'
        maxLength={5}
        minLength={5}
        value={text}
        disabled={'OK' === statusGame || 'ERROR' === statusGame}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default GameForm;
