import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GameList({ list = [], answer }) {
  const resultGuess = (i) => {
    const userWord = list.length > 0 ? list[i] : '';
    const guess = userWord ? checkGuess(userWord, answer) : '';
    return guess.length > 0 ? guess : null;
  };

  return (
    <div className='guess-results'>
      {range(6).map((i) => (
        <p
          className='guess'
          key={i}
        >
          {range(5).map((j) => {
            const guess = resultGuess(i);
            const className =
              guess && guess[j].status
                ? `cell ${guess[j].status}`
                : 'cell';
            return (
              <span
                className={className}
                key={i + '' + j}
              >
                {i < list.length && guess[j].letter}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default GameList;
