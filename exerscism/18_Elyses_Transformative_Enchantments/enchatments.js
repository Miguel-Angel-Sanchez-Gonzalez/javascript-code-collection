// Solución al ejercicio de Exercism: "Elyses Transformative Enchantments"
// Enunciado tomado de Exercism.org

export function seeingDouble(deck) {
  const newDeck = deck.map((card) => card * 2);
  return newDeck;
}

// Test case 1
const deck = [1, 2, 3, 4, 10];
console.log(seeingDouble(deck));

export function threeOfEachThree(deck) {
  const finalDeck = deck.reduce(
    (acc, val) => {
      if (val === 3) {
        acc.result.push("3", "3", "3");
      } else {
        acc.result.push(val);
      }
      return acc;
    },
    { result: [] }
  );

  return finalDeck.result;
}

// Test case 2
const deck2 = [1, 3, 9, 3, 7];
console.log(threeOfEachThree(deck2));

export function middleTwo(deck) {
  const newDeck = deck.slice(deck.length / 2 - 1, deck.length / 2 + 1);
  return newDeck;
}

// Test case 3
const deck3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(middleTwo(deck3));

export function sandwichTrick(deck) {
  const switchCards = [];
  switchCards.push(deck.pop());
  switchCards.push(deck.shift());

  deck.splice(deck.length / 2, 0, switchCards[0]);
  deck.splice(deck.length / 2 + 1, 0, switchCards[1]);

  console.log(deck);
}

// Test case 4
const deck4 = [1, 2, 3, 5, 6, 10];
sandwichTrick(deck4);

export function twoIsSpecial(deck) {
  const numTwos = deck.filter((card) => card === 2);
  return numTwos;
}

// Test case 5
const deck5 = [1, 2, 3, 4, 10, 2];
console.log(twoIsSpecial(deck5));

export function perfectlyOrdered(deck) {
  deck.sort((a, b) => a - b);
  return deck;
}

// Test case 6
const deck6 = [10, 1, 5, 3, 2, 8, 7];
console.log(perfectlyOrdered(deck6));

export function reorder(deck) {
  deck.reverse();
  return deck;
}

// Test case 7
const deck7 = [10, 1, 5, 3, 2];
console.log(reorder(deck7));
