export function isValidCommand(command) {
  const re = /^chatbot/i;
  return re.test(command);
}

console.log(isValidCommand("Chatbot, play a song from the 80's."));
// => True
console.log(isValidCommand("Hey Chatbot, where is the closest pharmacy?"));
// => False
console.log(
  isValidCommand("CHATBOT, do you have a solution for this challenge?")
);
// => True

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
  const re = /[a-zA-Z]+\.org/gi;
  const result = userInput.match(re);

  if (result) {
    return result;
  } else {
    return [];
  }
}

console.log(getURL("I learned a lot from exercism.org"));

export function niceToMeetYou(fullName) {
  throw new Error("Please implement the fullName function");
}
