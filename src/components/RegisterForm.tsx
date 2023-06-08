import { useState } from 'react';
import PlayerInput from './PlayerInput';

export type FormState = {
  player1: string;
  player2: string;
  player3: string;
  player4: string;
};

const FORM_ERROR_STATE_DEFAULT = {
  player1: null,
  player2: null,
  player3: null,
  player4: null,
};

function RegisterForm() {
  const [formState, setFormState] = useState({
    player1: '',
    player2: '',
    player3: '',
    player4: '',
  });
  const [formStateError, setFormStateError] = useState(FORM_ERROR_STATE_DEFAULT);

  function updateFormState(playerNum: number, name: string) {
    setFormState(prev => ({ ...prev, [`player${playerNum}`]: name }));
  }

  return (
    <section className='max-w-[1200px] mx-auto flex flex-col items-center pt-14'>
      <h1 className='font-semibold text-3xl px-4 py-2 ring-2 ring-gray-700 rounded-full bg-gray-800'>
        🏁 Racepeer 🏁
      </h1>

      <form
        className='max-w-[45ch] w-full mt-6'
        onSubmit={e => {
          e.preventDefault();
          setFormStateError(FORM_ERROR_STATE_DEFAULT);

          for (const key in formState) {
            if (!formState[key as keyof FormState]) {
              setFormStateError(prev => ({ ...prev, [key as keyof FormState]: 'Cannot be empty' }));
            }
          }

          console.log(formStateError);
        }}>
        <PlayerInput
          playerNum={1}
          formState={formState}
          updateFormState={updateFormState}
          error={formStateError[`player${1}`]}
        />
        <PlayerInput
          playerNum={2}
          formState={formState}
          updateFormState={updateFormState}
          error={formStateError[`player${2}`]}
        />
        <PlayerInput
          playerNum={3}
          formState={formState}
          updateFormState={updateFormState}
          error={formStateError[`player${3}`]}
        />
        <PlayerInput
          playerNum={4}
          formState={formState}
          updateFormState={updateFormState}
          error={formStateError[`player${4}`]}
        />
        <button className='w-full py-4 bg-sky-600 mt-8 rounded-md hover:bg-sky-700 ring-4 ring-sky-600/20'>
          Submit
        </button>
      </form>
    </section>
  );
}

export default RegisterForm;
