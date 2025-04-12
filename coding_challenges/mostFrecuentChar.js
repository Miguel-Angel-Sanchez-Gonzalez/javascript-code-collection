// Ejercicio de entrevista:
// Escribe una función que reciba una cadena de texto y devuelva la letra que más veces se repite.
// Si hay empate, devuelve cualquiera de las que más se repitan.

function mostCharFrecuent(word) {
  const result = {};

  for (const char of word) {
    result[char] = (result[char] || 0) + 1;
  }

  let max_value = 0;
  let max_char = "";

  for (const char in result) {
    if (result[char] > max_value) {
      max_value = result[char];
      max_char = char;
    }
  }

  console.log(
    `El máximo char es: ${max_char} con una cantidad de ${max_value}`
  );

  return max_char;
}

// Test case
console.log(mostCharFrecuent("javascript"));
