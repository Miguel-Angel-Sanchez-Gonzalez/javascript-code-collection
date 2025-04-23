// Solución al ejercicio de Exercism: "Lucky Numbers"
// Enunciado tomado de Exercism.org

export function twoSum(array1, array2) {
  const num1 = Number(array1.join(""));
  const num2 = Number(array2.join(""));
  return num1 + num2;
}

export function luckyNumber(value) {
  const arrayNum = value.toString().split("");

  for (let index = 0; index < arrayNum.length; index++) {
    if (arrayNum[index] !== arrayNum[arrayNum.length - (index + 1)]) {
      return false;
    }
  }
  return true;
}

export function errorMessage(input) {
  if (!input) {
    return "Required field";
  } else {
    let result = Number(input);
    if (!result) {
      return "Must be a number besides 0";
    } else {
      return "";
    }
  }
}

console.log(twoSum([1, 2, 3], [0, 7]));
console.log(luckyNumber(1441));
console.log(luckyNumber(123));

console.log(errorMessage("123"));
// // => ''

// // => 'Required field'
console.log(errorMessage(""));
console.log(errorMessage(null));
console.log(errorMessage(undefined));

// 'Must be a number besides 0'
console.log(errorMessage("some text"));
console.log(errorMessage("86f1"));
console.log(errorMessage("4 2"));
console.log(errorMessage("0"));
