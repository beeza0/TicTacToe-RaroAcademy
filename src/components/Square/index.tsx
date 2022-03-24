import { FC } from 'react';
import { SquareContainer, Symbol } from "./styles";
import { Game } from '../../models/models'

interface ISquareProps {
  squareId: number,
  gameState: Game,
  changeGameState: (line: number, colunm: number) => void
}

const Square: FC<ISquareProps> = ({squareId, gameState, changeGameState}) => {
  return (
    <SquareContainer>
      {console.log(squareId)}
        <Symbol>X</Symbol>
    </SquareContainer>
  );
}

export default Square;
