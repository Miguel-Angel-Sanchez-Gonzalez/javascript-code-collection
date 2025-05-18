// Solución al ejercicio de Exercism: "Bob"
// Enunciado tomado de Exercism.org

export const hey = (message) => {
  switch (message) {
    case message.trim() === "":
      return "Fine. Be that way!";
    case message === message.toUpperCase() && message.match(/[a-zA-Z]/):
      return "Whoa, chill out!";
    case message === message.toUpperCase() && message.endsWith("?"):
      return "Calm down, I know what I'm doing!";
    case message.endsWith("?"):
      return "Sure.";
    default:
      return "Whatever.";
  }
};

// Test cases
console.log(hey("Tom-ay-to, tom-aaaah-to."));
console.log(hey("WATCH OUT!"));
