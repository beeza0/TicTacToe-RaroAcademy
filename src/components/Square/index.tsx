import { FC } from 'react';
import { SquareContainer, Symbol } from "./styles";
import { Game } from '../../models/models'

interface ISquareProps {
  squareId: number,
  gameState: Game,
  changeGameState: (squareId: number) => void
}

const Square: FC<ISquareProps> = ({squareId, gameState, changeGameState}) => {

  const player1Selected = gameState.player1.moves.includes(squareId)
  const player2Selected = gameState.player2.moves.includes(squareId)

  return (
    <SquareContainer selected={(player1Selected || player2Selected)} onClick={() => (player1Selected || player2Selected) ? '' : changeGameState(squareId)}>
        {player1Selected && <Symbol>X</Symbol>}
        {player2Selected && <Symbol>O</Symbol>}
    </SquareContainer>
  );
}

export default Square;
