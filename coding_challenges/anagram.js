// # Ejercicio: Anagramas
// # 👉 Enunciado:
// # Escribe una función que determine si dos palabras son anagramas.
// # Dos palabras son anagramas si tienen las mismas letras, en igual cantidad, pero en diferente orden

function isAnagram(firstWord, secondWord) {
  let arr1 = firstWord.toLowerCase().split("").sort();
  let arr2 = secondWord.toLowerCase().split("").sort();

  console.log(arr1);
  console.log(arr2);

  return arr1.join("") === arr2.join("");
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
