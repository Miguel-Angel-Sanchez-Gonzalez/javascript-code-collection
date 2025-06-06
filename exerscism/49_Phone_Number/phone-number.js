// Solución al ejercicio de Exercism: "Phone Number"
// Enunciado tomado de Exercism.org

export const clean = (phoneNumber) => {
  if (/[a-zA-Z]/.test(phoneNumber)) {
    throw new Error("Letters not permitted");
  } else if (/[!@#$%^&*]/.test(phoneNumber)) {
    throw new Error("Punctuations not permitted");
  }

  let clearNumber = phoneNumber.replace(/\D/g, "");

  if (clearNumber[1] === "0") {
    throw new Error("Area code cannot start with zero");
  } else if (clearNumber[1] === "1") {
    throw new Error("Area code cannot start with one");
  }

  if (clearNumber[0] === "0") {
    throw new Error("Area code cannot start with zero");
  } else if (clearNumber[0] === "1") {
    throw new Error("Area code cannot start with one");
  }

  if (clearNumber[3] === "0") {
    throw new Error("Exchange code cannot start with zero");
  } else if (clearNumber[3] === "1") {
    throw new Error("Exchange code cannot start with one");
  }

  if (clearNumber.length > 11) {
    throw new Error("More than 11 digits");
  } else if (clearNumber.length < 10) {
    throw new Error("Incorrect number of digits");
  }

  if (clearNumber.length === 11) {
    if (clearNumber[0] !== "1") {
      throw new Error("11 digits must start with 1");
    }
  }

  if (clearNumber.length === 11) {
    return clearNumber.slice(1, clearNumber.length);
  }

  return clearNumber;
};

// Test cases
// console.log(clean("613-995-0253"));
// console.log(clean("+1 (613)-995-0253"));
// console.log(clean("(223) 456-7890"));
// console.log(clean("223.456.7890"));
// console.log(clean("223 456   7890   "));
// console.log(clean("123456789"));
// console.log(clean("22234567890"));
// console.log(clean("12234567890"));
// console.log(clean("+1 (223) 456-7890"));
// console.log(clean("321234567890"));
// console.log(clean("123-abc-7890"));
// console.log(clean("123-@:!-7890"));
// console.log(clean("(123) 456-7890"));
// console.log(clean("(223) 156-7890"));
// console.log(clean("1 (023) 456-7890"));
console.log(clean("1 (123) 456-7890"));
