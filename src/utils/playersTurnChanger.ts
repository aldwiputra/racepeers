import React from 'react';
import { PlayerState, PlayersTurn } from '../App';

export function playersTurnChanger(
  players: PlayerState,
  playersTurn: PlayersTurn,
  setPlayersTurn: React.Dispatch<React.SetStateAction<PlayersTurn>>
) {
  const playerKeys = Object.keys(players);
  const idx = playerKeys.findIndex((element) => element === playersTurn);

  console.log(playerKeys);
  console.log(idx);

  for (let i = idx + 2; i < idx + 5; i++) {
    const playerNum = i < 5 ? i : i - 4;
    console.log(playerNum);

    if (players[`player${playerNum}` as PlayersTurn].position <= 24) {
      setPlayersTurn(`player${playerNum}` as PlayersTurn);
      break;
    }
  }

  // switch (playersTurn) {
  //   case 'player1':
  //     if (players.player2.position <= 24) {
  //       setPlayersTurn('player2');
  //       break;
  //     }
  //     if (players.player3.position <= 24) {
  //       setPlayersTurn('player3');
  //       break;
  //     }
  //     if (players.player4.position <= 24) {
  //       setPlayersTurn('player4');
  //       break;
  //     }
  //     break;
  //   case 'player2':
  //     if (players.player3.position <= 24) {
  //       setPlayersTurn('player3');
  //       break;
  //     }
  //     if (players.player4.position <= 24) {
  //       setPlayersTurn('player4');
  //       break;
  //     }
  //     if (players.player1.position <= 24) {
  //       setPlayersTurn('player1');
  //       break;
  //     }
  //     break;
  //   case 'player3':
  //     if (players.player4.position <= 24) {
  //       setPlayersTurn('player4');
  //       break;
  //     }
  //     if (players.player1.position <= 24) {
  //       setPlayersTurn('player1');
  //       break;
  //     }
  //     if (players.player2.position <= 24) {
  //       setPlayersTurn('player2');
  //       break;
  //     }
  //     break;
  //   case 'player4':
  //     if (players.player1.position <= 24) {
  //       setPlayersTurn('player1');
  //       break;
  //     }
  //     if (players.player2.position <= 24) {
  //       setPlayersTurn('player2');
  //       break;
  //     }
  //     if (players.player3.position <= 24) {
  //       setPlayersTurn('player3');
  //       break;
  //     }
  //     break;
  // }
}
