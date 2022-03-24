import { FC, useState } from 'react';
import { MainContainer, GameTitle, GameContainer } from "./styles";
import { Game } from '../../models/models'
import Line from '../../components/Line'

const Main: FC = () => {

  const [gameState, setGameState] = useState<Game>({
    firstPlayerTurn: true,
    gameEnded: false,  
    player1: {
      name: '',
      score: 0,
      moves: []
    },
    player2: {
      name: '',
      score: 0,
      moves: []
    } 
  })

  const linesIds = [1, 2, 3]

  const changeGameState = (squareId: number) : void => {
    console.log(squareId);
    // setGame({})    
  }

  const renderLines = () : Array<JSX.Element> => 
    linesIds.map((id) => {
      return <Line lineId={id} gameState={gameState} changeGameState={changeGameState}/>
    })

  return (
    <MainContainer>
      <GameTitle>Tic Tac Toe</GameTitle>
      <GameContainer>
        {renderLines()}
      </GameContainer>
    </MainContainer>
  );
}

export default Main;
