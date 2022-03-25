import { FC } from 'react';
import { SquareContainer, Symbol } from "./styles";
import { Game } from '../../models/models'

interface ISquareProps {
  squareId: number,
  gameState: Game,
  changeGameState: (squareId: number) => void
}

const Square: FC<ISquareProps> = ({squareId, gameState, changeGameState}) => {
  return (
    <SquareContainer onClick={() => changeGameState(squareId)}>
        {gameState.player1.moves.includes(squareId) && <Symbol>X</Symbol>}
        {gameState.player2.moves.includes(squareId) && <Symbol>O</Symbol>}
    </SquareContainer>
  );
}

export default Square;
