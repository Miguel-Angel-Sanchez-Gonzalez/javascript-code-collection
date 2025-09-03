// Dado un string, devuelve el string invertido.

function reverseString(string) {
  return string.split("").reverse().join("");
}

// Test cases with methods
console.log(reverseString("forevermore"));
console.log(reverseString("Asi es el calor"));
console.log(reverseString("Bajo el sol"));

function reverseStringLoop(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

// Test cases whit loop
console.log(reverseStringLoop("sin gamulan"));
console.log(reverseStringLoop("Tele-ka"));
