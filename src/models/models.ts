export interface Player {
    name: string,
    moves: Array<number>
}

export interface Game {
    firstPlayerTurn: boolean,
    gameEnded: boolean,
    winner: string,
    player1: Player,
    player2: Player  
}

export interface ILineProps {
    lineId: number,
    gameState: Game,
    changeGameState: (squareId: number) => void
}

export interface ISquareProps {
    squareId: number,
    gameState: Game,
    changeGameState: (squareId: number) => void
  }