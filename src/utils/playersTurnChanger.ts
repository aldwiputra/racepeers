import React from 'react';
import { PlayersTurn } from '../App';

export function playersTurnChanger(
  playersTurn: PlayersTurn,
  setPlayersTurn: React.Dispatch<React.SetStateAction<PlayersTurn>>
) {
  switch (playersTurn) {
    case 'player1':
      setPlayersTurn('player2');
      break;
    case 'player2':
      setPlayersTurn('player3');
      break;
    case 'player3':
      setPlayersTurn('player4');
      break;
    case 'player4':
      setPlayersTurn('player1');
      break;
  }
}
