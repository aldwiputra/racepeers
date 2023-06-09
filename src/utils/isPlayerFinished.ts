import { PlayerState, PlayersTurn } from '../App';

export function isPlayerFinished(playerState: PlayerState, player: PlayersTurn) {
  return playerState[player].position > 24;
}
