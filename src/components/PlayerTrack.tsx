type PlayerTrackProps = {
  playerState: {
    name: string;
    position: number;
  };
  playerNum: number;
};

function PlayerTrack(props: PlayerTrackProps) {
  return (
    <div className='grid grid-flow-col'>
      <div className='py-2 px-4 text-center min-w-[10ch] bg-gray-800 border-t-2 border-b-2 border-gray-700/20'>
        {props.playerState.name}
      </div>
      {Array(24)
        .fill(1)
        .map((_item, idx) => (
          <div key={idx} className=' bg-gray-600 pb-2 border-t-2 border-b-2 border-gray-700/20'>
            <span
              className={`${
                idx + 1 === props.playerState.position ? 'opacity-1' : 'opacity-0'
              } text-3xl leading-none flip block`}>
              🏎️
            </span>
          </div>
        ))}
      <div className='relative min-w-[5rem] h-full bg-white flex'>
        <div className={`w-full ${props.playerNum % 2 !== 0 && 'bg-black'}`}></div>
        <div className={`w-full  ${props.playerNum % 2 === 0 && 'bg-black'}`}></div>
        <div className={`w-full  ${props.playerNum % 2 !== 0 && 'bg-black'}`}></div>
        <span
          className={`${
            props.playerState.position >= 25 ? 'opacity-1' : 'opacity-0'
          } absolute text-3xl leading-none flip block`}>
          🏎️
        </span>
      </div>
    </div>
  );
}

export default PlayerTrack;
