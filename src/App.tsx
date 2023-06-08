import { useState } from 'react';
import { gameStateChanger } from './utils/gameStateChanger';
import RegisterForm from './components/RegisterForm';

export type GameState = 'Register' | 'Playing' | 'Finished';

function App() {
  const [gameState, setGameState] = useState<GameState>('Register');

  return <main className='font-inter'>{gameState === 'Register' && <RegisterForm />}</main>;
}

export default App;
