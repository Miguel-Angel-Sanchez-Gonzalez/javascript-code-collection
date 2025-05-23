// Solución al ejercicio de Exercism: "Collatz Conjecture"
// Enunciado tomado de Exercism.org

export const steps = (num) => {
  if (num < 1) {
    throw new Error("Only positive numbers are allowed");
  }

  let steps = 0;
  let myNumber = num;

  while (myNumber !== 1) {
    if (myNumber % 2 === 0) {
      myNumber = myNumber / 2;
    } else {
      myNumber = myNumber * 3 + 1;
    }

    steps += 1;
  }

  return steps;
};

// Test cases
console.log(steps(1));
console.log(steps(16));
console.log(steps(12));
console.log(steps(1000000));
