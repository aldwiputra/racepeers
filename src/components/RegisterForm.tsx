import { useEffect, useState } from 'react';
import PlayerInput from './PlayerInput';
import MainLogo from './MainLogo';
import Container from './Container';

export type FormState = {
  player1: string;
  player2: string;
  player3: string;
  player4: string;
};

type RegisterFormProps = {
  changeGameState: () => void;
  changePlayersState: (key: string, name: string) => void;
};

const FORM_ERROR_STATE_DEFAULT = {
  player1: null,
  player2: null,
  player3: null,
  player4: null,
};

function RegisterForm(props: RegisterFormProps) {
  const [formState, setFormState] = useState({
    player1: '',
    player2: '',
    player3: '',
    player4: '',
  });
  const [formStateError, setFormStateError] = useState(FORM_ERROR_STATE_DEFAULT);
  const [submitted, setSubmitted] = useState(false);

  function updateFormState(playerNum: number, name: string) {
    setFormState(prev => ({ ...prev, [`player${playerNum}`]: name }));
  }

  useEffect(() => {
    if (
      submitted &&
      !formStateError.player1 &&
      !formStateError.player2 &&
      !formStateError.player3 &&
      !formStateError.player4
    ) {
      for (const key in formState) {
        props.changePlayersState(key, formState[key as keyof FormState]);
      }

      props.changeGameState();
    }
  }, [formStateError, props, submitted, formState]);

  return (
    <Container>
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

          setSubmitted(true);
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
    </Container>
  );
}

export default RegisterForm;
