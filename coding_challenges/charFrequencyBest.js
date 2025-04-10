// Ejercicio: Contar la frecuencia de caracteres
// Escribe una función en JavaScript llamada charFrequency que reciba un string y devuelva un objeto
// con la cantidad de veces que aparece cada caracter (ignorando espacios y sin importar mayúsculas/minúsculas).

function charFrequency(word) {
  const result = {};
  const clean = word.toLowerCase().replace(/\s/g, "");

  for (let char of clean) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

console.log(charFrequency("Hola Mundo"));
