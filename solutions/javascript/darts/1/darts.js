//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(ref) {
        const dx = this.x - ref.x;
        const dy = this.y - ref.y;

        return Math.sqrt(dx * dx + dy * dy);
    }
}

// Represents the mid point of the three concentric circles
const referencePoint = new Point(0, 0);

export const score = (x, y) => {
  const dartPosition = new Point(x, y);
  const distanceToReference = dartPosition.distanceTo(referencePoint);

  if (distanceToReference <= 1) {
    return 10;
  } else if (distanceToReference <= 5) {
    return 5;
  } else if (distanceToReference <= 10) {
    return 1;
  } else {
    return 0;
  }
};
