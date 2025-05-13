// Solución al ejercicio de Exercism: "Space Age"
// Enunciado tomado de Exercism.org

export const age = (planet, seconds) => {
  const oneYearInEarthDays = orbitalPeriodEarthYears[planet] * earthYearInDays;
  const result = seconds / 60 / 60 / 24 / oneYearInEarthDays;
  return parseFloat(result.toFixed(2));
};

const earthYearInDays = 365.25;

const orbitalPeriodEarthYears = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

// Test cases
console.log(age("earth", 1000000000));
console.log(age("mercury", 2134835688));
console.log(age("venus", 189839836));
console.log(age("mars", 2129871239));
console.log(age("jupiter", 901876382));
console.log(age("saturn", 2000000000));
console.log(age("uranus", 1210123456));
console.log(age("neptune", 1821023456));
