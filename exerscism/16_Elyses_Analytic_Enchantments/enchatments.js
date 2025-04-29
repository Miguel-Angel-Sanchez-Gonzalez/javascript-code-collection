// Solución al ejercicio de Exercism: "Elyses Analytic Enchantments"
// Enunciado tomado de Exercism.org

export function getCardPosition(stack, card) {
  return stack.findIndex((num) => num === card);
}

// Test case
const card = 2;
console.log(getCardPosition([9, 7, 3, 2], card));

export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

// Test case
const card2 = 3;
console.log(doesStackIncludeCard([2, 3, 4, 5], card2));

export function isEachCardEven(stack) {
  return stack.every((num) => num % 2 === 0);
}

// Test case
console.log(isEachCardEven([2, 4, 6, 7]));

export function doesStackIncludeOddCard(stack) {
  return stack.some((num) => num % 2 !== 0);
}

// Test case
console.log(doesStackIncludeOddCard([1, 2, 6, 4, 8]));

export function getFirstOddCard(stack) {
  return stack.find((num) => num % 2 !== 0);
}

// Test case
console.log(getFirstOddCard([4, 2, 8, 7, 9]));

export function getFirstEvenCardPosition(stack) {
  return stack.findIndex((num) => num % 2 === 0);
}

// Test case
console.log(getFirstEvenCardPosition([5, 2, 3, 1]));
