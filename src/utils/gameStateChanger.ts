import React from 'react';
import { GameState } from '../App';

export function gameStateChanger(
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>
) {
  switch (gameState) {
    case 'Register':
      setGameState('Playing');
      break;
    case 'Playing':
      setGameState('Finished');
      break;
    case 'Finished':
      setGameState('Register');
      break;
  }
}
