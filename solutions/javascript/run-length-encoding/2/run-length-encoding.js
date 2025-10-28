//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// "AABCCCDEEEE"  ->  "2AB3CD4E"
//  ^ count is 2 and dataValue is "A"
export const encode = (string) => {
  return string
    .replace(
      /(.)\1+/g, 
      (match, dataValue) => {
        const count = match.length;

        return `${count}${dataValue}`;
      }
    );
};

// "2AB3CD4E"  ->  "AABCCCDEEEE"
//   ^ dataValue
//  ^ count
export const decode = (string) => {
  return string
    .replace(
      /(\d+)(.)/g, 
      (_, count, dataValue) => dataValue.repeat(count)
    );
};
