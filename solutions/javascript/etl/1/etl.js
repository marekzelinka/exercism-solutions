//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (legacyData) => {
  const updatedData = {}

  for (const points in legacyData) {
    for (const letter of legacyData[points]) {
      updatedData[letter.toLowerCase()] = Number(points);
    }
  }
    
  return updatedData;
};
