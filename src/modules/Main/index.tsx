import { FC, useState } from 'react';
import { MainContainer, GameTitle, GameContainer } from "./styles";
import Line from '../../components/Line'

const Main: FC = () => {

  interface Player {
    name: string,
    score: number,
    moves: Array<number>
  }

  const [player1, setPlayer1] = useState<Player>({
    name: '',
    score: 0,
    moves: []
  })

  const [player2, setPlayer2] = useState<Player>({
    name: '',
    score: 0,
    moves: []
  })


  return (
    <MainContainer>
      <GameTitle>Tic Tac Toe</GameTitle>
      <GameContainer>
        <Line/>
        <Line/>
        <Line/>
      </GameContainer>
    </MainContainer>
  );
}

export default Main;
