// Solución al ejercicio de Exercism: "Two Fer"
// Enunciado tomado de Exercism.org

export const twoFer = (name) => {
  if (name === undefined) {
    return "One for you, one for me.";
  }
  return `One for ${name}, one for me.`;
};

// Test cases
console.log(twoFer("Alice"));
console.log(twoFer("Bohdan"));
console.log(twoFer());
console.log(twoFer("Zaphod"));
