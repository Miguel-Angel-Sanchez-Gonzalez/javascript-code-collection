// Solución al ejercicio de Exercism: "Transpose"
// Enunciado tomado de Exercism.org

export const transpose = (input) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let str = input[i][j];
      let rowLength = 0;
      if (result[j]) {
        rowLength = result[j].length;
      }
      if (i > rowLength) {
        str = str.padStart(i - rowLength + 1, " ");
      }
      result[j] ? (result[j] += str) : (result[j] = str);
    }
  }
  return result;
};

// Test cases
// console.log(transpose([]));
// console.log(transpose(["A1"]));
// console.log(transpose(["A", "1"]));
// console.log(transpose(["ABC", "123"]));
// console.log(transpose(["Single line."]));
console.log(transpose(["The fourth line.", "The fifth line."]));
// console.log(transpose(["The first line.", "The second line."]));
// console.log(
//   transpose(["The longest line.", "A long line.", "A longer line.", "A line."])
// );
// console.log(transpose(["HEART", "EMBER", "ABUSE", "RESIN", "TREND"]));
// console.log(transpose(["FRACTURE", "OUTLINED", "BLOOMING", "SEPTETTE"]));
// console.log(transpose(["T", "EE", "AAA", "SSSS", "EEEEE", "RRRRRR"]));
