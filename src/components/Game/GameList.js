import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function GuessResults({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className='guess'>
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={result ? result[number].letter : undefined}
          status={result ? result[number].status : undefined}
        />
      ))}
    </p>
  );
}

function GameList({ list = [], answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <GuessResults
          key={number}
          value={list[number]}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GameList;
