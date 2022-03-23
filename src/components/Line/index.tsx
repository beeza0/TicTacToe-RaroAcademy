import { FC } from 'react';
import { LineContainer } from "./styles";
import Square from '../Square';

const Line: FC = () => {
  return (
    <LineContainer>
        <Square/>
        <Square/>
        <Square/>
    </LineContainer>
  );
}

export default Line;
