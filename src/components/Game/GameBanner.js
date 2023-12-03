import React from 'react';

function GameBanner({ statusGame, guesses, answer }) {
  if ('OK' === statusGame) {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guesses} guesses</strong>.
        </p>
      </div>
    );
  } else if ('ERROR' === statusGame) {
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
  return null;
}

export default GameBanner;
