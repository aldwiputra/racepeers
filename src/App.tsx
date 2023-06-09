import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import GamePlayground from './components/GamePlayground';
import { gameStateChanger } from './utils/gameStateChanger';
import MainLogo from './components/MainLogo';
import Container from './components/Container';
import { playersTurnChanger } from './utils/playersTurnChanger';

export type GameState = 'Register' | 'Playing' | 'Finished';
export type PlayersTurn = 'player1' | 'player2' | 'player3' | 'player4';
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
  const [playersTurn, setPlayersTurn] = useState<PlayersTurn>('player1');
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

        <div className='w-full text-center mt-8'>
          {gameState === 'Playing' && (
            <p className='font-semibold'>{`=== ${
              players[playersTurn].name[0].toUpperCase() + players[playersTurn].name.substring(1)
            }'s turn ===`}</p>
          )}
          <button
            onClick={() => playersTurnChanger(playersTurn, setPlayersTurn)}
            className='px-6 py-3 font-semibold bg-sky-600 rounded-md mt-4'>
            Race Away!
          </button>
        </div>
      </Container>
    </main>
  );
}

export default App;
