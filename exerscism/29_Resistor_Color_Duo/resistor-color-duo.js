// Solución al ejercicio de Exercism: "Resistor Color Duo"
// Enunciado tomado de Exercism.org

export const decodedValue = (color) => {
  const color1 = COLORS.indexOf(color[0]);
  const color2 = COLORS.indexOf(color[1]);
  return parseInt("" + color1 + "" + color2);
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
console.log(decodedValue(["brown", "black"]));
console.log(decodedValue(["white", "orange"]));
