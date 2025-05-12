// Solución al ejercicio de Exercism: "RNA Transcription"
// Enunciado tomado de Exercism.org

export const toRna = (adn) => {
  const nucleodites = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  const rna = adn.split("").map((nucleodite) => nucleodites[nucleodite]);
  if (rna.includes(undefined)) {
    throw new Error("Invalid input DNA.");
  }
  return rna.join("");
};

// Test cases
console.log(toRna("ACGTGGTCTTAA"));
console.log(toRna(""));
