//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message, railsCount) => {
  const rails = Array(railsCount).fill("");

  {
    let rail = 0;
    let reversed = false;
  
    for (const char of message) {
      rails[rail] += char;
  
      reversed ? rail-- : rail++;
  
      if (rail === railsCount - 1 || rail === 0) {
        reversed = !reversed;
      }
    }
  }

  return rails.join("");
};

export const decode = (encodedMessage, railsCount) => {
  let rails = Array(railsCount).fill("");

  {
    let rail = 0;
    let reversed = false;
  
    for (const _ of encodedMessage) {
      rails[rail] += "*";
  
      reversed ? rail-- : rail++;
  
      if (rail === railsCount - 1 || rail === 0) {
        reversed = !reversed;
      }
    }
  }

  {
    let charIndex = 0;

    for (const rail in rails) {
      const railLength = rails[rail].length;
      rails[rail] = encodedMessage.slice(
        charIndex, 
        charIndex + railLength
      );
      charIndex += railLength;
    }
  }

  let decodedMessage = "";

  {
    let rail = 0;
    let reversed = false;

    for (const char of encodedMessage) {
      decodedMessage += rails[rail].charAt(0);
      rails[rail] = rails[rail].slice(1);

      reversed ? rail-- : rail++;

      if (rail === railsCount - 1 || rail === 0) {
        reversed = !reversed;
      }
    } 
  }

  return decodedMessage;
};
