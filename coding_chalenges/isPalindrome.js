// Escribe una función que determine si una palabra es un palíndromo (se lee igual al derecho y al revés).
// Ejemplo: "reconocer" → true, "chat" → false.

function isPalindrome(word) {

  let reverseIndex = word.length;

  for (let index = 0; index < word.length; index++) {

    // console.log("comparando " + word[index] + " con " + word[reverseIndex - 1]);
    if (word[index] != word[reverseIndex - 1]) {
      console.log("no es palindromo");
      return false
    }
    
    reverseIndex -= 1
  }

  console.log("si es palindromo");
  return true
}


isPalindrome("reconocer")