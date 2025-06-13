// Solución al ejercicio de Exercism: "Run Length Encoding"
// Enunciado tomado de Exercism.org

export const encode = (mixedString) => {
  let result = "";
  let count = 0;

  for (let i = 0; i < mixedString.length; i++) {
    count++;
    mixedString[i] !== mixedString[i + 1] &&
      ((result += count === 1 ? mixedString[i] : count + mixedString[i]),
      (count = 0));
  }

  return result;
};

export const decode = (mixedString) => {
  let result = "";
  let myNum = "1";
  for (let i = 0; i < mixedString.length; i++) {
    Number.isInteger(parseInt(mixedString[i]))
      ? ((myNum = mixedString[i]),
        Number.isInteger(parseInt(mixedString[i + 1])) &&
          (myNum += mixedString[++i]))
      : ((result += mixedString[i].repeat(Number(myNum))), (myNum = "1"));
  }

  return result;
};

// Test cases encode
console.log(encode(""));
console.log(encode("XYZ"));
console.log(encode("AABBBCCCC"));
console.log(encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"));
console.log(encode("  hsqq qww  "));
console.log(encode("aabbbcccc"));

// Test cases decode
console.log(decode(""));
console.log(decode("XYZ"));
console.log(decode("2A3B4C"));
console.log(decode("12WB12W3B24WB"));
console.log(decode("2 hs2q q2w2 "));
console.log(decode("2a3b4c"));
// Test Mix
console.log(decode(encode("zzz ZZ  zZ")));
