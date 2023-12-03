import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numOfGuesses }) {
  const textGuess =
    numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`;

  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{textGuess}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
