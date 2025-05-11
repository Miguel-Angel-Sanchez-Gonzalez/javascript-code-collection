// Solución al ejercicio de Exercism: "Resistor Color"
// Enunciado tomado de Exercism.org

export const colorCode = (color) => {
  return COLORS.indexOf(color);
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

// Test cases
console.log(colorCode("brown"));
console.log(colorCode("violet"));
