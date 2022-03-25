import { FC, useState } from 'react';
import { MainContainer, GameTitle, GameContainer, RestartButton } from "./styles";
import { Game } from '../../models/models'
import Line from '../../components/Line'

// 1 4 9 2 8 18 3 12 27

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
    if(gameState.firstPlayerTurn) {
      let aux = gameState.player1.moves
      aux.push(squareId)
      setGameState({...gameState, firstPlayerTurn: !gameState.firstPlayerTurn, player1: {...gameState.player1, moves: aux}})   
    }
    else {
      let aux = gameState.player2.moves
      aux.push(squareId)
      setGameState({...gameState, firstPlayerTurn: !gameState.firstPlayerTurn, player2: {...gameState.player2, moves: aux}})   
   
    }
  }

  const restartGame = () : void => {
    setGameState({firstPlayerTurn: true, gameEnded: false, player1: {...gameState.player1, moves: []}, player2: {...gameState.player2, moves: []}})
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
      <RestartButton onClick={restartGame}>
        Restart
      </RestartButton>
    </MainContainer>
  );
}

export default Main;
