// Solución al ejercicio de Exercism: "Raindrops"
// Enunciado tomado de Exercism.org

export const convert = (num) => {
  const rules = [
    { factor: 3, sound: "Pling" },
    { factor: 5, sound: "Plang" },
    { factor: 7, sound: "Plong" },
  ];

  let result = "";
  for (const rule of rules) {
    if (num % rule.factor === 0) {
      result += rule.sound;
    }
  }

  return result !== "" ? result : String(num);
};

// Test cases
console.log(typeof convert(1));
console.log(convert(105));
