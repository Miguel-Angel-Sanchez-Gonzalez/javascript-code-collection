// Solución al ejercicio de Exercism: "Lucian's Luscious Lasagna"
// Enunciado tomado de Exercism.org

const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}

// Test cases
console.log(remainingMinutesInOven(20));

console.log(preparationTimeInMinutes(5));

console.log(totalTimeInMinutes(3, 35));
