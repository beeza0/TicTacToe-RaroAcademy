export interface Player {
    name: string,
    score: number,
    moves: Array<number>
}

export interface Game {
    firstPlayerTurn: boolean,
    gameEnded: boolean,
    player1: Player,
    player2: Player  
  }