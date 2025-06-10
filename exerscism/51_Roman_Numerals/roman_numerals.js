// Solución al ejercicio de Exercism: "Roman Numerals"
// Enunciado tomado de Exercism.org

export const toRoman = (number) => {
  let num = number;
  let result = "";

  while (num !== 0) {
    if (num >= 1000) {
      num -= 1000;
      result += "M";
      continue;
    }

    if (num >= 900) {
      num -= 900;
      result += "CM";
      continue;
    }

    if (num >= 500) {
      num -= 500;
      result += "D";
      continue;
    }

    if (num >= 400) {
      num -= 400;
      result += "CD";
      continue;
    }

    if (num >= 100) {
      num -= 100;
      result += "C";
      continue;
    }

    if (num >= 90) {
      num -= 90;
      result += "XC";
      continue;
    }

    if (num >= 50) {
      num -= 50;
      result += "L";
      continue;
    }

    if (num >= 40) {
      num -= 40;
      result += "XL";
      continue;
    }

    if (num >= 10) {
      num -= 10;
      result += "X";
      continue;
    }

    if (num === 9) {
      num -= 9;
      result += "IX";
      continue;
    }

    if (num >= 5) {
      num -= 5;
      result += "V";
      continue;
    }

    if (num === 4) {
      num -= 4;
      result += "IV";
      continue;
    }

    if (num <= 3) {
      num -= 1;
      result += "I";
      continue;
    }
  }

  return result;
};

// Test cases
console.log(toRoman(1));
console.log(toRoman(2));
console.log(toRoman(3));
console.log(toRoman(9));
console.log(toRoman(16));
console.log(toRoman(27));
console.log(toRoman(48));
console.log(toRoman(49));
console.log(toRoman(50));
console.log(toRoman(59));
console.log(toRoman(66));
console.log(toRoman(93));
console.log(toRoman(141));
console.log(toRoman(163));
console.log(toRoman(166));
console.log(toRoman(402));
console.log(toRoman(575));
console.log(toRoman(666));
console.log(toRoman(911));
console.log(toRoman(1024));
console.log(toRoman(1666));
console.log(toRoman(3000));
console.log(toRoman(3001));
console.log(toRoman(3999));
