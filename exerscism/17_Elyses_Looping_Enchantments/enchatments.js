// Solución al ejercicio de Exercism: "Elyses Looping Enchantments"
// Enunciado tomado de Exercism.org

export function cardTypeCheck(stack, card) {
  let count_cards = 0;
  stack.forEach((element) => {
    if (element === card) {
      count_cards += 1;
    }
  });
  return count_cards;
}

// Test case
const cardType = 3;
console.log(cardTypeCheck([1, 2, 3, 4], cardType));

export function determineOddEvenCards(stack, type) {
  let count_cards = 0;
  if (!type) {
    for (const card of stack) {
      if (card % 2 !== 0) {
        count_cards += 1;
      }
    }
  } else {
    for (const card of stack) {
      if (card % 2 === 0) {
        count_cards += 1;
      }
    }
  }
  return count_cards;
}

// Test cases
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
