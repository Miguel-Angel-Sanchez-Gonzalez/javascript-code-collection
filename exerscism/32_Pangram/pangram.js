// Solución al ejercicio de Exercism: "Pangram"
// Enunciado tomado de Exercism.org

export const isPangram = (paragraph) => {
  const clearParagraph = paragraph.toLowerCase().replace(/\./g, "");
  const arrayAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < arrayAlphabet.length; i++) {
    if (!clearParagraph.includes(arrayAlphabet[i])) {
      return false;
    }
  }
  return true;
};

// Test cases
console.log(isPangram(""));
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(isPangram("the quick brown fox jumps over the lazy dog"));
console.log(
  isPangram("a quick movement of the enemy will jeopardize five gunboats")
);
console.log(isPangram("five boxing wizards jump quickly at it"));
console.log(isPangram("the_quick_brown_fox_jumps_over_the_lazy_dog"));
console.log(isPangram("the 1 quick brown fox jumps over the 2 lazy dogs"));
console.log(isPangram('"Five quacking Zephyrs jolt my wax bed."'));
