// Solución al ejercicio de Exercism: "Run Length Encoding"
// Enunciado tomado de Exercism.org

export const encode = (mixedString) => {
  const arr = mixedString.split("");
  let counter = 1;
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current === arr[i + 1]) {
      counter += 1;
    } else {
      if (counter !== 1) {
        result += counter;
        result += current;
        counter = 1;
      } else {
        result += current;
      }
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
