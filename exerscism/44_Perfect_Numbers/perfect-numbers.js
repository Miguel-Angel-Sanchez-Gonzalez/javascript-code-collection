// Solución al ejercicio de Exercism: "Perfect numbers"
// Enunciado tomado de Exercism.org

export const classify = (number) => {
  if (typeof number !== "number" || number <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  let aliquotSum = 0;
  for (let index = 0; index < number; index++) {
    if (number % index === 0) {
      aliquotSum += index;
    }
  }

  if (number === aliquotSum) {
    return "perfect";
  }
  if (number < aliquotSum) {
    return "abundant";
  }

  return "deficient";
};

// Test cases
// classify(-1);
console.log(classify(6));
console.log(classify(28));
console.log(classify(33550336));
console.log(classify(12));
console.log(classify(30));
console.log(classify(33550335));
console.log(classify(1));
console.log(classify(2));
console.log(classify(4));
console.log(classify(32));
console.log(classify(33550337));
