export class GameOfLife {
  #matrix = [];
  
  constructor(matrix) {
    this.#matrix = matrix;
  }

  tick() {
    let nextState = this.#matrix.map(row => row.map(_ => 0));
    
    for (let row = 0; row < this.#matrix.length; row++) {
      for (let col = 0; col < this.#matrix[0].length; col++) {
        let aliveNeighboursCount = this.count(row, col);

        if (this.#matrix[row][col] === 1 && (aliveNeighboursCount === 2 || aliveNeighboursCount === 3)) {
          nextState[row][col] = 1;
        } else if (this.#matrix[row][col] === 0 && aliveNeighboursCount === 3) {
          nextState[row][col] = 1;
        }
      }
    }

    this.#matrix = nextState;
  }

  state() {
    return this.#matrix;
  }

  count(row, col) {
    let neighboursPositions = GameOfLife.around
      .map(([dr, dc]) => [row + dr, col + dc])
      .filter(([r, c]) => (
        r >= 0 && r < this.#matrix.length &&
        c >= 0 && c < this.#matrix[0].length
      ));

    return neighboursPositions
      .map(([r, c]) => this.#matrix[r][c])
      .filter(cell => cell === 1)
      .length;
  }

  static around = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1],
  ];
}