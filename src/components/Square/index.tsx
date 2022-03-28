import { FC } from 'react';
import { SquareContainer, Symbol } from "./styles";
import { ISquareProps } from '../../models/models'

const Square: FC<ISquareProps> = ({squareId, gameState, changeGameState}) => {

  const player1Selected = gameState.player1.moves.includes(squareId)
  const player2Selected = gameState.player2.moves.includes(squareId)
  const disableSquare = (player1Selected || player2Selected || gameState.gameEnded)

  return (
    <SquareContainer selected={disableSquare} onClick={() => disableSquare ? '' : changeGameState(squareId)}>
        {player1Selected && <Symbol>X</Symbol>}
        {player2Selected && <Symbol>O</Symbol>}
    </SquareContainer>
  );
}

export default Square;
