// Solución al ejercicio de Exercism: "Isogram"
// Enunciado tomado de Exercism.org

export const isIsogram = (word) => {
  const cleanedWord = word.toLowerCase().replace(/[-\s]/g, "");
  const seenLetters = new Set();

  for (const letter of cleanedWord) {
    if (seenLetters.has(letter)) {
      return false;
    }
    seenLetters.add(letter);
  }

  return true;
};

// Test cases
console.log(isIsogram("isogram"));
console.log(isIsogram("eleven"));
console.log(isIsogram("zzyzx"));
console.log(isIsogram("subdermatoglyphic"));
console.log(isIsogram("Alphabet"));
console.log(isIsogram("alphAbet"));
console.log(isIsogram("thumbscrew-japingly"));
console.log(isIsogram("thumbscrew-jappingly"));
console.log(isIsogram("six-year-old"));
console.log(isIsogram("Emily Jung Schwartzkopf"));
console.log(isIsogram("accentor"));
console.log(isIsogram("angola"));
console.log(isIsogram("up-to-date"));
