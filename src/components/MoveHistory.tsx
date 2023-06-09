type MoveHistoryProps = {
  moveHistory: string[];
};

function MoveHistory(props: MoveHistoryProps) {
  return (
    <div className='my-8 text-center py-6 px-10 bg-zinc-800/50 rounded-md'>
      <h5 className='text-center font-semibold text-2xl'>Last 5 Moves</h5>
      <div className='w-full h-[1px] bg-slate-400/20 mt-4'></div>
      <div className='mt-4'>
        {props.moveHistory.map(item => (
          <p className='text-gray-400 mt-1'>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default MoveHistory;
