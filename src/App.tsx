import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import GamePlayground from './components/GamePlayground';
import { gameStateChanger } from './utils/gameStateChanger';
import MainLogo from './components/MainLogo';

export type GameState = 'Register' | 'Playing' | 'Finished';

function App() {
  const [gameState, setGameState] = useState<GameState>('Register');
  const [players, setPlayers] = useState({
    player1: {
      name: '',
      position: 1,
    },
    player2: {
      name: '',
      position: 1,
    },
    player3: {
      name: '',
      position: 1,
    },
    player4: {
      name: '',
      position: 1,
    },
  });

  function changeGameState() {
    gameStateChanger(gameState, setGameState);
  }

  function changePlayersState(key: string, name: string) {
    setPlayers(prev => ({ ...prev, [key]: name }));
  }

  return (
    <main className='font-inter pt-14 px-10'>
      <MainLogo />
      {gameState === 'Register' && (
        <RegisterForm changeGameState={changeGameState} changePlayersState={changePlayersState} />
      )}
      {gameState === 'Playing' && <GamePlayground players={players} />}
    </main>
  );
}

export default App;
