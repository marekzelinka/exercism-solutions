/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done.";
  } else if (remainingTime == null) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

export function preparationTime(layers, averagePrepTime = 2) {
  return layers.length * averagePrepTime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  
  for (const layer of layers) {
    switch (layer) {
      case 'noodles': {
        noodles += 50;
        break;
      }
      case 'sauce': {
        sauce += 0.2
        break;
      }
    }
  }

  return { noodles, sauce };
}

export function addSecretIngredient(listA, listB) {
  const lastListAItem = listA.at(-1);

  listB.push(lastListAItem);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  
  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * (portions / 2);
  }

  return scaledRecipe;
}