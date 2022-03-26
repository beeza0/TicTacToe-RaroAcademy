import { FC, useEffect, useState } from 'react';
import { MainContainer, GameTitle, GameContainer, RestartButton } from "./styles";
import { Game } from '../../models/models'
import intersection from '../../utils/intersection';
import Line from '../../components/Line'

// 1 4 9 2 8 18 3 12 27

const Main: FC = () => {

  const [gameState, setGameState] = useState<Game>({
    firstPlayerTurn: true,
    gameEnded: false,
    winner: '',  
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

  const winCases = [
    [1, 4, 9], [2, 8, 18], [3, 12, 27],
    [1, 2, 3], [4, 8, 12], [9, 18, 27], 
    [1, 8, 27], [9, 8, 3] 
  ]

  useEffect(() => {
    if(checkIfWon()) {
      setGameState({...gameState, gameEnded: true, winner: !gameState.firstPlayerTurn ? 'player1' : 'player2'})
    }    
  }, [gameState.player1, gameState.player2])

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
    setGameState({firstPlayerTurn: true, gameEnded: false, winner: '', player1: {...gameState.player1, moves: []}, player2: {...gameState.player2, moves: []}})
  }

  const checkIfWon = () : boolean => {
    let aux = false
    winCases.forEach((winCase: Array<number>) => {
      if(intersection(gameState.player1.moves, winCase).sort().join(',') === winCase.sort().join(',')) aux = true
      else if(intersection(gameState.player2.moves, winCase).sort().join(',') === winCase.sort().join(',')) aux = true
    })
    return aux
  }

  const renderLines = () : Array<JSX.Element> => 
    linesIds.map((id) => {
      return <Line lineId={id} gameState={gameState} changeGameState={changeGameState}/>
    })

  return (
    <MainContainer>
      <GameTitle>Tic Tac Toe</GameTitle>
      {gameState.gameEnded && <div>CABOUUUUUUUUUUUUUUU, {gameState.winner} ganhou!!</div>}
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
