// Solución al ejercicio de Exercism: "Reverse String"
// Enunciado tomado de Exercism.org

export const reverseString = (inputString) => {
  let result = "";
  for (let index = 1; index <= inputString.length; index++) {
    const element = inputString[inputString.length - index];
    result += element;
  }
  return result;
};

console.log(reverseString(""));
console.log(reverseString("robot"));
console.log(reverseString("Ramen"));
console.log(reverseString("I am hungry!"));
console.log(reverseString("racecar"));
console.log(reverseString("drawer"));
