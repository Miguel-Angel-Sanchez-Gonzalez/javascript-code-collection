// Solución al ejercicio de Exercism: "Bob"
// Enunciado tomado de Exercism.org

export const hey = (message) => {
  message = message.trim();

  const regWithNums = /\d/;
  const regWithSpecialChars = /[:)]+/;
  if (message === "") {
    return "Fine. Be that way!";
  }

  if (
    message === message.toUpperCase() &&
    message.endsWith("?") &&
    !regWithNums.test(message) &&
    !regWithSpecialChars.test(message)
  ) {
    return "Calm down, I know what I'm doing!";
  }

  if (message.endsWith("?")) {
    return "Sure.";
  }

  const onlyLetters = message.replace(/[^a-zA-Z]/g, "");

  if (onlyLetters && onlyLetters === onlyLetters.toUpperCase()) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};

// Test cases
console.log(hey("Tom-ay-to, tom-aaaah-to."));
console.log(hey("WATCH"));
console.log(hey("FCECDFCAAB"));
console.log(hey("Does this cryogenic chamber make me look fat?"));
console.log(hey("You are, what, like 15?"));
console.log(hey("fffbbcbeab?"));
console.log(hey("Let's go make out behind the gym!"));
console.log(hey("It's OK if you don't want to go to the DMV."));
console.log(hey("WHAT THE HELL WERE YOU THINKING?"));
console.log(hey("'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!1!!1!'"));
console.log(hey("1, 2, 3"));
