export class GameOfLife {
  #matrix;

  constructor(matrix) {
    this.#matrix = matrix;
  }

  tick() {
    const nextMatrix = this.#matrix.map(
      (row, y) => 
        row.map((cell, x) => {
          const neighborCount = this.#countAliveNeighbours(x, y);

          if (neighborCount === 3 || cell && neighborCount === 2) {
            return 1;  // alive
          }

          return 0;  // dead
        })
    );
  
    this.#matrix = nextMatrix
  }

  state() {
    return this.#matrix;
  }

  #countAliveNeighbours(x, y) {
    return GameOfLife.#NEIGHBORS.reduce(
      (acc, [dx, dy]) => (
        acc + (this.#matrix[y + dy] && this.#matrix[y + dy][x + dx] || 0)
      ),
      0
    );
  }

  static #NEIGHBORS = [
    [-1, -1], [0, -1], [1, -1],
    [-1,  0],          [1,  0],
    [-1,  1], [0,  1], [1,  1]
  ];
}