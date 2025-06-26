export function randomShipRegistryNumber() {
  const max = 9999;
  const min = 1000;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return "NCC-" + randomNumber;
}

export function randomStardate() {
  const max = 42000.0;
  const min = 41000.0;
  const randomNumber = Math.random() * (max - min) + min;
  return randomNumber;
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
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  for (const key in planets) {
    if (Number(key) === randomNumber) {
      return planets[key];
    }
  }
}

// Test cases
console.log(randomShipRegistryNumber());
console.log(randomStardate());
console.log(randomPlanetClass());
