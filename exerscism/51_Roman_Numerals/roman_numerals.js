// Solución al ejercicio de Exercism: "Roman Numerals"
// Enunciado tomado de Exercism.org

export const toRoman = (number) => {
  const romanNumeralsMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  let currentNum = number;

  for (const entry of romanNumeralsMap) {
    while (currentNum >= entry.value) {
      result += entry.numeral;
      currentNum -= entry.value;
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
