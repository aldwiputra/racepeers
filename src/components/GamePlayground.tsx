import { PlayerState } from '../App';
import PlayerTrack from './PlayerTrack';

type GamePlaygroundProps = {
  players: PlayerState;
};

function GamePlayground(props: GamePlaygroundProps) {
  return (
    <div className='mt-10 w-full min-w-[1200px]'>
      <PlayerTrack playerState={props.players.player1} playerNum={1} />
      <PlayerTrack playerState={props.players.player2} playerNum={2} />
      <PlayerTrack playerState={props.players.player3} playerNum={3} />
      <PlayerTrack playerState={props.players.player4} playerNum={4} />
    </div>
  );
}

export default GamePlayground;
