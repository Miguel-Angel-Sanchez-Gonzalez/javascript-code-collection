// Solución al ejercicio de Exercism: "Transpose"
// Enunciado tomado de Exercism.org

export const transpose = (lines) => {
  const transposedLines = [];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];

    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      let charToAdd = line[charIndex];
      const currentLength = transposedLines[charIndex]?.length || 0;

      if (lineIndex > currentLength) {
        charToAdd = charToAdd.padStart(lineIndex - currentLength + 1, " ");
      }

      if (transposedLines[charIndex]) {
        transposedLines[charIndex] += charToAdd;
      } else {
        transposedLines[charIndex] = charToAdd;
      }
    }
  }

  return transposedLines;
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
