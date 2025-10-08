//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Squares {
  constructor(length) {
    this.numbers = Array.from({ length }, (_value, i) => i + 1);
  }

  get sumOfSquares() {
    return this.numbers
      .map(number => number ** 2)
      .reduce((total, number) => total + number, 0);
  }

  get squareOfSum() {
    return this.numbers.reduce((total, number) => total + number, 0) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
