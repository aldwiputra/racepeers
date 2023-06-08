import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import GamePlayground from './components/GamePlayground';
import { gameStateChanger } from './utils/gameStateChanger';
import MainLogo from './components/MainLogo';
import Container from './components/Container';

export type GameState = 'Register' | 'Playing' | 'Finished';
export type PlayerState = {
  player1: {
    name: string;
    position: number;
  };
  player2: {
    name: string;
    position: number;
  };
  player3: {
    name: string;
    position: number;
  };
  player4: {
    name: string;
    position: number;
  };
};

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
    setPlayers(prev => ({ ...prev, [key]: { ...prev[key as keyof PlayerState], name: name } }));
  }

  return (
    <main className='font-inter pt-14 px-10'>
      <Container>
        <MainLogo />
        {gameState === 'Register' && (
          <RegisterForm changeGameState={changeGameState} changePlayersState={changePlayersState} />
        )}
        {gameState === 'Playing' && <GamePlayground players={players} />}
      </Container>
    </main>
  );
}

export default App;
