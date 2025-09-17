// Solución al ejercicio de Exercism: "Wordy"
// Enunciado tomado de Exercism.org

export function isAQuestion(text) {
  return text[text.length - 1] === "?";
}

export function hasWhatIsPrefix(text) {
  const prefix = "What is";
  const startOfText = text.split(" ").slice(0, 2).join(" ");

  return startOfText === prefix;
}

export function isANumber(text) {
  const number = Number(text);
  return number ? true : false;
}

export const answer = (text) => {
  if (!isAQuestion(text)) {
    return false;
  } else {
    const clearText = text.slice(0, text.length - 1);

    return (
      hasWhatIsPrefix(clearText) &&
      isANumber(clearText.split(" ").slice(2, 3).join(""))
    );
  }
};

const test = answer("What is 5?");
console.log(test);
