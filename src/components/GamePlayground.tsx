import Container from './Container';
import MainLogo from './MainLogo';

type GamePlaygroundProps = {
  players: {
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
};

function GamePlayground(props: GamePlaygroundProps) {
  return (
    <Container>
      <pre>{JSON.stringify(props.players)}</pre>
    </Container>
  );
}

export default GamePlayground;
