// Solución al ejercicio de Exercism: "Elyses Destructured Enchantments"
// Enunciado tomado de Exercism.org

export function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}

// Test cases
const deck = [5, 9, 7, 1, 8];
console.log(getFirstCard(deck));

export function getSecondCard(deck) {
  const [, secondCard] = deck;
  return secondCard;
}

// Test cases
console.log(getSecondCard(deck));

export function swapTopTwoCards(deck) {
  const [first, second, ...anything] = deck;
  const result = [second, first, ...anything];
  return result;
}

// Test cases
const deck2 = [10, 7, 3, 8, 5];
console.log(swapTopTwoCards(deck2));

export function discardTopCard(deck) {
  const [first, ...anything] = deck;
  return [first, anything];
}

// Test cases
const deck3 = [2, 5, 4, 9, 3];
console.log(discardTopCard(deck3));

export function insertFaceCards(deck) {
  const [first, ...rest] = deck;
  return [first, "jack", "queen", "king", ...rest];
}

// Test cases
const deck4 = [5, 4, 7, 10];
console.log(insertFaceCards(deck4));
