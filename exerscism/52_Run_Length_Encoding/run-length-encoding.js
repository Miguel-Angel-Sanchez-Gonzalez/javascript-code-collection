// Solución al ejercicio de Exercism: "Run Length Encoding"
// Enunciado tomado de Exercism.org

export const encode = (mixedString) => {
  let result = "";
  let count = 0;

  for (let i = 0; i < mixedString.length; i++) {
    count++;

    if (mixedString[i] !== mixedString[i + 1]) {
      if (count === 1) {
        result += mixedString[i];
      } else {
        result += count + mixedString[i];
      }
      count = 0;
    }
  }

  return result;
};

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};

// Test cases
console.log(encode(""));
console.log(encode("XYZ"));
console.log(encode("AABBBCCCC"));
console.log(encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"));
console.log(encode("  hsqq qww  "));
console.log(encode("aabbbcccc"));
