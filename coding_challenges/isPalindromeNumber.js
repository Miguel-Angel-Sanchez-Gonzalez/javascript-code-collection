function isPalindromeNumber(num) {
  const strNum = num.toString();
  const reversedStrNum = strNum.split("").reverse().join("");
  return strNum === reversedStrNum;
}

// Test cases
console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(-121));
