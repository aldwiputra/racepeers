import { useEffect, useState } from 'react';
import { gameStateChanger } from './utils/gameStateChanger';
import { playersTurnChanger } from './utils/playersTurnChanger';
import { capitalize } from './utils/capitalize';
import { isPlayerFinished } from './utils/isPlayerFinished';

import RegisterForm from './components/RegisterForm';
import GamePlayground from './components/GamePlayground';
import MainLogo from './components/MainLogo';
import Container from './components/Container';
import MoveHistory from './components/MoveHistory';
import ScoreBoard from './components/ScoreBoard';

export type GameState = 'Register' | 'Playing' | 'Finished';
export type PlayersTurn = keyof PlayerState;
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
  const [scoreBoard, setScoreBoard] = useState<PlayersTurn[]>([]);
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
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

  const splicedMoveHistory = moveHistory.slice(0, 5);

  function changeGameState() {
    gameStateChanger(gameState, setGameState);
  }

  function changePlayersState(key: string, name: string) {
    setPlayers((prev) => ({ ...prev, [key]: { ...prev[key as keyof PlayerState], name: name } }));
  }

  function handlePlayButton() {
    // if (players[playersTurn].position < 25) {
    const randomNum = Math.floor(Math.random() * 5);
    setMoveHistory([
      `${capitalize(players[playersTurn].name)} moved ${randomNum} grids`,
      ...moveHistory,
    ]);

    setPlayers((prev) => {
      const copiedState = { ...prev };
      copiedState[playersTurn].position += randomNum;

      if (copiedState[playersTurn].position > 24) {
        setScoreBoard([...scoreBoard, playersTurn]);
      }

      return copiedState;
    });
    // }
    playersTurnChanger(players, playersTurn, setPlayersTurn);
  }

  useEffect(() => {
    if (
      gameState === 'Playing' &&
      isPlayerFinished(players, 'player1') &&
      isPlayerFinished(players, 'player2') &&
      isPlayerFinished(players, 'player3') &&
      isPlayerFinished(players, 'player4')
    ) {
      changeGameState();
    }

    // if (gameState === 'Playing' && players[playersTurn].position > 24) {
    //   playersTurnChanger(players, playersTurn, setPlayersTurn);
    // }
  }, [players]);

  return (
    <main className='font-inter pt-14 px-10'>
      <Container>
        <MainLogo />
        {gameState === 'Register' && (
          <RegisterForm changeGameState={changeGameState} changePlayersState={changePlayersState} />
        )}
        {gameState === 'Playing' || gameState === 'Finished' ? (
          <div className='mb-10'>
            <GamePlayground players={players} />
            <div className='w-full text-center mt-8'>
              <p className={`font-semibold text-2xl ${gameState === 'Finished' && 'text-sky-600'}`}>
                {gameState === 'Playing' && `🟢 ${capitalize(players[playersTurn].name)}'s Turn 🟢`}
                {gameState === 'Finished' &&
                  `🎉🎉🎉 ${capitalize(players[scoreBoard[0]].name)} Won 🎉🎉🎉`}
              </p>

              {gameState === 'Finished' && (
                <p className='mt-2 text-gray-400'>⟳ Refresh or reload to start a new game.</p>
              )}
              <button
                disabled={gameState === 'Finished'}
                onClick={handlePlayButton}
                className='px-6 py-3 font-semibold bg-sky-600 hover:bg-sky-700 rounded-md mt-4 text-lg disabled:bg-zinc-500'>
                {gameState === 'Playing' && 'Race Away!'}
                {gameState === 'Finished' && 'Finished!'}
              </button>
            </div>
            {scoreBoard.length > 0 && <ScoreBoard players={players} scoreBoard={scoreBoard} />}
            {gameState === 'Playing' && <MoveHistory moveHistory={splicedMoveHistory} />}
          </div>
        ) : null}
      </Container>
    </main>
  );
}

export default App;
