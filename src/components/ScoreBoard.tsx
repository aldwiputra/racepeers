import { PlayerState, PlayersTurn } from '../App';

type ScoreBoardProps = {
  players: PlayerState;
  scoreBoard: PlayersTurn[];
};

function ScoreBoard(props: ScoreBoardProps) {
  return (
    <div className=' text-center mt-8 px-8 py-4 bg-gray-800/20 rounded-md ring-2 ring-gray-700/75'>
      <h5 className='text-center font-semibold text-2xl'>Race Result</h5>
      <div className='w-full h-[1px] bg-slate-400/20 mt-2'></div>
      <table className='text-center mx-auto mt-2'>
        <tr className='text-slate-500'>
          <th className='pr-4'>Rank</th>
          <th>Player</th>
        </tr>
        {props.scoreBoard.map((player, idx) => (
          <tr>
            <td className='pr-4'>{idx + 1}</td>
            <td>{props.players[player].name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ScoreBoard;
