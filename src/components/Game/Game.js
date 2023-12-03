import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// import GuessInput from '../GuessInput';
// import GuessResults from '../GuessResults';
// import WonBanner from '../WonBanner/WonBanner';
// import LostBanner from '../LostBanner/LostBanner';

//#region MY SOLUTION
import GameForm from './GameForm';
import GameList from './GameList';
import GameBanner from './GameBanner';
// import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
//#endregion

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //#region MY SOLUTION
  const [list, setList] = React.useState([]);
  const [statusGame, setStatusGame] = React.useState('');

  function handleAddList(label) {
    const nextElement = [...list, label];
    setList(nextElement);
    if (label === answer) {
      setStatusGame('OK');
      return;
    }
    if (nextElement.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatusGame('ERROR');
      return;
    }
  }
  //#endregion

  // running, won, lost
  // const [gameStatus, setGameStatus] = React.useState('running');
  // const [guesses, setGuesses] = React.useState([]);

  // function handleSubmitGuess(tentativeGuess) {
  //   // const nextGuess = {
  //   //   id: crypto.randomUUID(),
  //   //   value: tentativeGuess
  //   // };
  //   // setGuesses([...guesses, nextGuess]);
  //   const nextGuesses = [...guesses, tentativeGuess];
  //   setGuesses(nextGuesses);
  //   if (tentativeGuess.toUpperCase() === answer) {
  //     setGameStatus('won');
  //     return;
  //   }
  //   if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
  //     setGameStatus('lost');
  //     return;
  //   }
  // }

  return (
    <>
      {/* MY SOLUTION */}
      <GameList
        list={list}
        answer={answer}
      />
      <GameForm
        handleAddList={handleAddList}
        statusGame={statusGame}
      />

      <GameBanner
        statusGame={statusGame}
        guesses={list.length}
        answer={answer}
      />

      {/* REAL SOLUTION */}
      {/* <GuessResults
        guesses={guesses}
        answer={answer}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />

      {'won' === gameStatus && (
        <WonBanner numOfGuesses={guesses.length} />
      )}

      {'lost' === gameStatus && (
        <LostBanner numOfGuesses={guesses.length} />
      )} */}
    </>
  );
}

export default Game;
