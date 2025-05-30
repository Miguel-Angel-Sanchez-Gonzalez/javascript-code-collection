// Solución al ejercicio de Exercism: "Acronym"
// Enunciado tomado de Exercism.org

export const parse = (originalPhrase) => {
  const cleanPhrase = originalPhrase.toUpperCase().replace(/[-_]/g, " ");
  const arrWords = cleanPhrase.split(/[\s]/);
  let result = "";

  for (const word of arrWords) {
    if (word !== "") {
      result += word[0];
    }
  }

  return result;
};

// Test cases
console.log(parse("Portable Network-Graphics"));
console.log(parse("Ruby on Rails"));
console.log(parse("First In, First Out"));
console.log(parse("GNU Image Manipulation Program"));
console.log(parse("Complementary metal-oxide semiconductor"));
console.log(
  parse(
    "Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me"
  )
);
console.log(parse("Something - I made up from thin air"));
console.log(parse("Halley's Comet"));
console.log(parse("The Road _Not_ Taken"));
