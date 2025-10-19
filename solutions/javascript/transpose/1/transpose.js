//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const matrix = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const rowLength = matrix[j]?.length ?? 0;
      let element = input[i][j];

      if (i > rowLength) {
        element = element.padStart(i - rowLength + 1, " ")
      }

      if (matrix[j]) {
        matrix[j] += element;
      } else {
        matrix[j] = element;
      }
    }
  }

  return matrix;
};