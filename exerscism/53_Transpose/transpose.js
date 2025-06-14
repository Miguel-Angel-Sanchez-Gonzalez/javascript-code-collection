// Solución al ejercicio de Exercism: "Transpose"
// Enunciado tomado de Exercism.org

export const transpose = (array) => {
  const objIndex = {};
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const splitElement = element.split("");
    for (let j = 0; j < splitElement.length; j++) {
      const myChar = splitElement[j];
      if (!objIndex.hasOwnProperty(j)) {
        objIndex[j] = myChar;
      } else {
        objIndex[j] += "" + myChar;
      }
    }
  }

  for (const key in objIndex) {
    result.push(objIndex[key]);
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
