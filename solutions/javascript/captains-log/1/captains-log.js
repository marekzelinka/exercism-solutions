// @ts-check

const getRandomInRange = (min, max) => min + Math.random() * (max - min);

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${getRandomInRange(1000, 9999)}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return getRandomInRange(41000.0, 42000.0);
}

const PLANETARY_CLASSES = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const index = Math.floor(Math.random() * PLANETARY_CLASSES.length);

  return PLANETARY_CLASSES[index];
}
