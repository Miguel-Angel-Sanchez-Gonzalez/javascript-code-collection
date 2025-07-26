// Solución al ejercicio de Exercism: "Pascal's Triangle"
// Enunciado tomado de Exercism.org

export const rows = (inputNum) => {
  if (inputNum === 0) return [];

  const result = [[1]];

  for (let i = 1; i < inputNum; i++) {
    const prevRow = result[i - 1];
    const newRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    result.push(newRow);
  }

  return result;
};

// Test cases
console.log(rows(0));
console.log(rows(1));
console.log(rows(2));
console.log(rows(3));
console.log(rows(4));
console.log(rows(5));
console.log(rows(6));
console.log(rows(7));
