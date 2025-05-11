// Solución al ejercicio de Exercism: "Regular Chatbot"
// Enunciado tomado de Exercism.org

export function isValidCommand(command) {
  const re = /^chatbot/i;
  return re.test(command);
}

console.log(isValidCommand("Chatbot, play a song from the 80's."));
console.log(isValidCommand("Hey Chatbot, where is the closest pharmacy?"));
console.log(
  isValidCommand("CHATBOT, do you have a solution for this challenge?")
);

export function removeEmoji(message) {
  const re = /emoji[0-9]+/gi;
  return message.replace(re, "");
}

console.log(
  removeEmoji("I love playing videogames emoji3465 it's one of my hobbies")
);

export function checkPhoneNumber(number) {
  const re = /\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}/;
  if (re.test(number)) {
    return "Thanks! You can now download me to your phone.";
  } else {
    return `Oops, it seems like I can't reach out to ${number}`;
  }
}

console.log(checkPhoneNumber("(+34) 659-771-594"));
console.log(checkPhoneNumber("659-771-594"));

export function getURL(userInput) {
  const re = /[a-zA-Z]+\.[a-zA-Z]{2,3}/gi;
  const result = userInput.match(re);

  if (result) {
    return result;
  } else {
    return [];
  }
}

console.log(
  getURL("I learned a lot from exercism.org notion.so and reddit.com")
);

export function niceToMeetYou(fullName) {
  const re = /,/;
  const result = fullName.split(re);
  return `Nice to meet you, ${result[1].trim()} ${result[0].trim()}`;
}

let str = "Smith, John";
console.log(niceToMeetYou(str));
