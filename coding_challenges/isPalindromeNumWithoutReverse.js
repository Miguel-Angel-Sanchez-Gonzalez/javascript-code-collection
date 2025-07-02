function isPalindromeWithoutReverse(num) {
  if (num < 0) return false;
  if (num === 0) return true;

  const splitNum = num.toString().split("");
  for (let i = 0; i < splitNum.length / 2; i++) {
    if (splitNum[i] !== splitNum[splitNum.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log(isPalindromeWithoutReverse(121));
console.log(isPalindromeWithoutReverse(1521));
console.log(isPalindromeWithoutReverse(20302));
