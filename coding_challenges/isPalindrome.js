// Escribe una función que determine si una palabra es un palíndromo (se lee igual al derecho y al revés).
// Ejemplo: "reconocer" → true, "chat" → false.

function isPalindrome(word) {
  for (let index = 0; index < Math.floor(word.length / 2); index++) {
    if (word[index] !== word[word.length - 1 - index]) {
      // console.log("no es palindromo");
      return false
    }
  }
  // console.log("si es palindromo");
  return true
}
// Test cases
console.log(isPalindrome("reconocer"));
console.log(isPalindrome("chat"));