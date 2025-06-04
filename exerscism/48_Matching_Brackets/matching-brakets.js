// Solución al ejercicio de Exercism: "Matching Brackets"
// Enunciado tomado de Exercism.org

export const isPaired = (string) => {
  const arr = string.split("");
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const openingBrackets = Object.keys(brackets);
  const closingBrackets = Object.values(brackets);

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();
      if (brackets[lastOpeningBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Test cases
console.log(isPaired("{[])"));
console.log(isPaired("(((185 + 223.85) * 15) - 543)/2"));
