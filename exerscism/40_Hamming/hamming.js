// Solución al ejercicio de Exercism: "Hamming"
// Enunciado tomado de Exercism.org

export const compute = (firstDNA, secondDNA) => {
  if (firstDNA.length !== secondDNA.length) {
    throw new Error("strands must be of equal length");
  }

  let hamming = 0;
  for (let index = 0; index < firstDNA.length; index++) {
    if (firstDNA[index] !== secondDNA[index]) {
      hamming += 1;
    }
  }

  return hamming;
};

// Test cases
console.log(compute("GGACGGATTCTG", "AGGACGGATTCT"));
// console.log(compute("AATG", "AAA"));
