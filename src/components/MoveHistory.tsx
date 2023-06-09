type MoveHistoryProps = {
  moveHistory: string[];
};

function MoveHistory(props: MoveHistoryProps) {
  return (
    <div className='my-8 w-fit mx-auto text-center py-6 px-10 bg-zinc-800/50 ring-2 ring-zinc-700/40 rounded-md'>
      <h5 className='text-center font-semibold text-2xl'>Last 5 Moves</h5>
      <div className='w-full h-[1px] bg-zinc-700/40 mt-4'></div>
      <div className='mt-4'>
        {props.moveHistory.map((item, idx) => (
          <p key={idx} className='text-gray-400 mt-1'>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MoveHistory;
