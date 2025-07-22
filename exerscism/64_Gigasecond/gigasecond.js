// Solución al ejercicio de Exercism: "Triangle"
// Enunciado tomado de Exercism.org

export const gigasecond = (inputDate) => {
  const GIGASECOND = 1e12;
  return new Date(inputDate.getTime() + GIGASECOND);
};

// Test cases
console.log(gigasecond(new Date(Date.UTC(2011, 3, 25))));
console.log(gigasecond(new Date(Date.UTC(1977, 5, 13))));
