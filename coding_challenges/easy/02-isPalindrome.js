function isPalindrome(str) {
  const clearStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  for (let i = 0; i < clearStr.length / 2; i++) {
    if (clearStr[i] !== clearStr[clearStr.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("somos"));
console.log(isPalindrome("Anita lava la tina"));

function isPalindromeReverse(str) {
  const clearStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reverseString = clearStr.split("").reverse().join("");
  return clearStr === reverseString;
}

console.log(isPalindromeReverse("A man, a plan, a canal: Panama"));
console.log(isPalindrome("somos"));
console.log(isPalindrome("Anita lava la tina"));
