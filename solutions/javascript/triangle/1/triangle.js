//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isValid() {
    const [a, b, c] = this.sides;

    return a > 0 && b > 0 && c > 0 && a + b >= c && b + c >= a && a + c >= b;
  }

  get isEquilateral() {
    if (!this.isValid) {
      return false;
    }

    return this.sides.every(side => side === this.sides[0]);
  }

  get isIsosceles() {
    if (!this.isValid) {
      return false;
    }

    const [a, b, c] = this.sides;

    return a === b || b === c || c === a;
  }

  get isScalene() {
    if (!this.isValid) {
      return false;
    }

    const [a, b, c] = this.sides;

    return a !== b && b !== c && c !== a;
  }
}
