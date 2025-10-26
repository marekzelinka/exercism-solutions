//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

// Get random ingeter for a 6-sided dice
const getRandomDice = ({ sides }) => getRandomInteger(1, sides)

export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  } else if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  }

  return Math.floor((score - 10) / 2);
};

const ABILITIES = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

const INITIAL_HITPOINTS = 10;

export class Character {
  constructor() {
    for (const ability of ABILITIES) {
      this[ability] = Character.rollAbility()
    }
    
    this.hitpoints = INITIAL_HITPOINTS + abilityModifier(this.constitution);
  }
  
  static rollAbility() {
    const dices = Array
      // rolling four 6-sided dice
      .from({length: 4}, () => getRandomDice({ sides: 6 }))
      // get the largest three dice
      .sort()
      .slice(1);

    // return the sum of the largest three dice
    return dices.reduce((sum, dice) => sum + dice, 0);
  }
}
