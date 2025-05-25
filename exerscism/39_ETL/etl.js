// Solución al ejercicio de Exercism: "ETL"
// Enunciado tomado de Exercism.org

export const transform = (obj) => {
  const result = {};

  for (const score in obj) {
    const letters = obj[score];
    const numericScore = Number(score);

    for (const letter of letters) {
      result[letter.toLowerCase()] = numericScore;
    }
  }

  return result;
};

// Test case
const old = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
console.log(transform(old));
