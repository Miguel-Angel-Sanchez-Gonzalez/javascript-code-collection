// Ejercicio: Contar la frecuencia de caracteres
// Escribe una función en JavaScript llamada charFrequency que reciba un string y devuelva un objeto
// con la cantidad de veces que aparece cada caracter (ignorando espacios y sin importar mayúsculas/minúsculas).

function charFrequency(word) {
  let clear_word = word.toLowerCase().replace(" ", "");
  let count = 1;
  const visited = [];
  const char_result = [];

  for (let i = 0; i < clear_word.length; i++) {
    if (!visited.includes(clear_word[i])) {
      visited.push(clear_word[i]);
      for (let j = i + 1; j < clear_word.length; j++) {
        if (clear_word[i] === clear_word[j]) {
          count += 1;
        }
      }
      char_result.push(char_visited(clear_word[i], count));
      count = 1;
    }
  }
  console.log(char_result);
}

function char_visited(char, frecuency) {
  const result = {
    caracter: char,
    repeat: frecuency,
  };
  return result;
}

charFrequency("Hola Mundo");
