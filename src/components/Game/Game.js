import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameForm from './GameForm';
import GameList from './GameList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [list, setList] = useState([]);
  const [statusGame, setStatusGame] = useState('');
  const [guesses, setGuesses] = useState(0);

  function handleAddList(label) {
    setList([...list, label]);
    setGuesses(guesses + 1);
    if (label === answer) {
      setStatusGame('OK');
      return;
    }
    if (list.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setStatusGame('ERROR');
      return;
    }
  }

  return (
    <>
      <GameList
        list={list}
        answer={answer}
      />
      <GameForm
        handleAddList={handleAddList}
        statusGame={statusGame}
        guesses={guesses}
        answer={answer}
      />
    </>
  );
}

export default Game;
