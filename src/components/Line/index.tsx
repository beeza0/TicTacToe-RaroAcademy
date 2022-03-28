import { FC } from 'react';
import { LineContainer } from "./styles";
import Square from '../Square';
import { ILineProps } from '../../models/models'

const Line: FC<ILineProps> = ({lineId, gameState, changeGameState}) => {

    const squaresIds = [1, 2, 3]

    const renderSquares = () : Array<JSX.Element> => 
        squaresIds.map((squareId) => {
        return <Square squareId={lineId * Math.pow(squareId, 2)} gameState={gameState} changeGameState={changeGameState}/>
        })

    return (
        <LineContainer>
            {renderSquares()}
        </LineContainer>
    );
}

export default Line;
