// Solución al ejercicio de Exercism: "Transpose"
// Enunciado tomado de Exercism.org

export const transpose = (array) => {
  if (array.length === 0) return [];

  const maxLength = Math.max(...array.map((line) => line.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    let row = "";
    for (let j = 0; j < array.length; j++) {
      row += array[j][i] || " ";
    }
    result.push(row);
  }

  return result;
};

// Test cases
console.log(transpose([]));
console.log(transpose(["A1"]));
console.log(transpose(["A", "1"]));
console.log(transpose(["ABC", "123"]));
console.log(transpose(["Single line."]));
console.log(transpose(["The fourth line.", "The fifth line."]));
console.log(transpose(["The first line.", "The second line."]));
console.log(
  transpose(["The longest line.", "A long line.", "A longer line.", "A line."])
);
console.log(transpose(["HEART", "EMBER", "ABUSE", "RESIN", "TREND"]));
console.log(transpose(["FRACTURE", "OUTLINED", "BLOOMING", "SEPTETTE"]));
console.log(transpose(["T", "EE", "AAA", "SSSS", "EEEEE", "RRRRRR"]));
