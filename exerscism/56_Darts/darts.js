// Solución al ejercicio de Exercism: "Darts"
// Enunciado tomado de Exercism.org

export const score = (coordinateX, coordinateY) => {
  const distanceFromOrigin = Math.sqrt(coordinateX ** 2 + coordinateY ** 2);
  if (distanceFromOrigin <= 1) {
    return 10;
  }
  if (distanceFromOrigin <= 5) {
    return 5;
  }
  if (distanceFromOrigin <= 10) {
    return 1;
  }
  return 0;
};

// Test cases
console.log(score(-9, 9));
console.log(score(0, 10));
console.log(score(-5, 0));
console.log(score(0, -1));
console.log(score(0, 0));
console.log(score(-0.1, -0.1));
console.log(score(0.7, 0.7));
console.log(score(0.8, -0.8));
