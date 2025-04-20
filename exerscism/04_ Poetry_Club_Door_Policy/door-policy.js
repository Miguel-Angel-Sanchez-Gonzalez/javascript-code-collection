// Solución al ejercicio de Exercism: "Poetry Club Door Policy"
// Enunciado tomado de Exercism.org

export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  const result = word[0].toUpperCase() + word.toLowerCase().slice(1);
  return result;
}

export function backDoorResponse(line) {
  const result = line.trim();
  return result[result.length - 1];
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ", please";
}

// Test cases
console.log(frontDoorResponse("Stands so high"));
console.log(frontDoorPassword("shire"));
console.log(frontDoorPassword("SHIRE"));
console.log(backDoorResponse("Stands so high"));
console.log(backDoorResponse("Stands so high   "));
console.log(backDoorPassword("horse"));
