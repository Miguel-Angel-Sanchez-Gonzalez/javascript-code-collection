// Solución al ejercicio de Exercism: "Captain's Log"
// Enunciado tomado de Exercism.org

export function randomShipRegistryNumber() {
  const max = 9999;
  const min = 1000;
  return "NCC-" + randomInRange(max, min);
}

export function randomStardate() {
  const max = 42000.0;
  const min = 41000.1;
  return randomInRange(max, min);
}

export function randomPlanetClass() {
  const planets = {
    1: "D",
    2: "H",
    3: "J",
    4: "K",
    5: "L",
    6: "M",
    7: "N",
    8: "R",
    9: "T",
    10: "Y",
  };

  const max = Object.keys(planets).length;
  const min = 1;
  const randomNumber = randomInRange(max, min);

  for (const key in planets) {
    if (Number(key) === randomNumber) {
      return planets[key];
    }
  }
}

export function randomInRange(max, min) {
  if (max < min) {
    throw new Error("Max must be greater than Min");
  }

  const esDecimal = hasDecimal(max) || hasDecimal(min);

  return esDecimal
    ? Math.random() * (max - min) + min
    : Math.floor(Math.random() * (max - min + 1)) + min;
}

function hasDecimal(n) {
  return Math.floor(n) !== n;
}

// Test cases
console.log(randomShipRegistryNumber());
console.log(randomStardate());
console.log(randomPlanetClass());
