// Solución al ejercicio de Exercism: "Wordy"
// Enunciado tomado de Exercism.org

export function hasWhatIsPrefix(text) {
  const prefix = "What is";
  const startOfText = text.split(" ").slice(0, 2).join(" ");

  return startOfText === prefix;
}

export const answer = (text) => {
  if (hasWhatIsPrefix(text)) {
    return true;
  }

  return false;
};

const test = answer("What is 5?");
console.log(test);
