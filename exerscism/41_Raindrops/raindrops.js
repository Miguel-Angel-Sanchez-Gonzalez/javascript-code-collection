// Solución al ejercicio de Exercism: "Raindrops"
// Enunciado tomado de Exercism.org

export const convert = (num) => {
  let result = "";
  if (num % 3 === 0) {
    result += "Pling";
  }
  if (num % 5 === 0) {
    result += "Plang";
  }
  if (num % 7 === 0) {
    result += "Plong";
  }
  return result !== "" ? result : String(num);
};

console.log(typeof convert(1));
console.log(convert(105));
