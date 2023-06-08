import { FormState } from './RegisterForm';

type PlayerInputProps = {
  playerNum: number;
  formState: FormState;
  updateFormState: (playerNum: number, name: string) => void;
  error: string | null;
};

function PlayerInput(props: PlayerInputProps) {
  return (
    <div className='mt-4'>
      <label htmlFor='name' className='font-medium text-sm'>
        {`Player ${props.playerNum}`}
      </label>
      <input
        type='name'
        className='bg-gray-700/20 mt-2 block text-zinc-300 px-4 p-3 rounded-md w-full focus:outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500'
        id={`player-${props.playerNum}`}
        value={props.formState[`player${props.playerNum}` as keyof FormState]}
        placeholder='Name'
        maxLength={4}
        onChange={e => props.updateFormState(props.playerNum, e.target.value)}
      />
      {props.error && <span className='block text-sm mt-1 text-red-600 font-medium'>{props.error}</span>}
    </div>
  );
}

export default PlayerInput;
