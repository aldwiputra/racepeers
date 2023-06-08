import { useState } from 'react';
import { gameStateChanger } from './utils/gameStateChanger';

export type GameState = 'Register' | 'Playing' | 'Finished';

function App() {
  const [gameState, setGameState] = useState<GameState>('Register');

  return (
    <main className='font-inter'>
      <h1 className='text-5xl font-semibold'>Game State: {gameState}</h1>
      <button onClick={() => gameStateChanger(gameState, setGameState)}>Change State</button>
    </main>
  );
}

export default App;
