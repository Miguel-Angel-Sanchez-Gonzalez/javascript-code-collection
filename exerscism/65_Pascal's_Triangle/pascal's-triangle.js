// Solución al ejercicio de Exercism: "Pascal's Triangle"
// Enunciado tomado de Exercism.org

export const rows = (inputNum) => {
  if (inputNum === 0) return [];

  const result = [];
  result.push([1]);

  while (result.length < inputNum) {
    const currentArray = result[result.length - 1];
    const nextArr = [];

    for (let i = 0; i < currentArray.length; i++) {
      if (nextArr.length === 0) {
        nextArr.push(currentArray[0]);
      }

      if (currentArray[i + 1] === undefined) {
        nextArr.push(currentArray.at(-1));
      } else {
        nextArr.push(currentArray[i] + currentArray[i + 1]);
      }
    }

    result.push(nextArr);
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
