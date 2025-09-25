//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const hasLetters = input => input.match(/[a-z]+/gi);
const isQuestion = input => input.trimEnd().endsWith("?");
const isYelling = input => input.toUpperCase() === input;

export const hey = (message) => {
  if (hasLetters(message) && isQuestion(message) && isYelling(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion(message)) {
    return "Sure.";
  } else if (hasLetters(message) && isYelling(message)) {
    return "Whoa, chill out!";
  } else if (message.match(/^\s*$/g)) {
    return "Fine. Be that way!";
  }

  return "Whatever.";
};
