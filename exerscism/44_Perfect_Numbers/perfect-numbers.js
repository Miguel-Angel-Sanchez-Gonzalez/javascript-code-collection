// Solución al ejercicio de Exercism: "Perfect numbers"
// Enunciado tomado de Exercism.org

export const classify = (number) => {
  if (typeof number !== "number" || number <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  let aliquotSum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      aliquotSum += i;
    }
  }

  if (number === aliquotSum) {
    return "perfect";
  } else if (number < aliquotSum) {
    return "abundant";
  } else {
    return "deficient";
  }
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
