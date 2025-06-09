// Solución al ejercicio de Exercism: "Phone Number"
// Enunciado tomado de Exercism.org

export const clean = (phoneNumber) => {
  if (/[a-zA-Z]/.test(phoneNumber)) {
    throw new Error("Letters not permitted");
  }

  if (/[^0-9\s().+-]/.test(phoneNumber)) {
    throw new Error("Punctuations not permitted");
  }

  let digits = phoneNumber.replace(/\D/g, "");

  if (digits.length < 10) {
    throw new Error("Incorrect number of digits");
  }

  if (digits.length > 11) {
    throw new Error("More than 11 digits");
  }

  if (digits.length === 11) {
    if (digits[0] !== "1") {
      throw new Error("11 digits must start with 1");
    }
    digits = digits.slice(1);
  }

  const areaCode = digits[0];
  const exchangeCode = digits[3];

  if (areaCode === "0") {
    throw new Error("Area code cannot start with zero");
  }

  if (areaCode === "1") {
    throw new Error("Area code cannot start with one");
  }

  if (exchangeCode === "0") {
    throw new Error("Exchange code cannot start with zero");
  }

  if (exchangeCode === "1") {
    throw new Error("Exchange code cannot start with one");
  }

  return digits;
};

// Test cases
console.log(clean("613-995-0253"));
console.log(clean("+1 (613)-995-0253"));
console.log(clean("(223) 456-7890"));
console.log(clean("223.456.7890"));
console.log(clean("223 456   7890   "));
console.log(clean("123456789"));
console.log(clean("22234567890"));
console.log(clean("12234567890"));
console.log(clean("+1 (223) 456-7890"));
console.log(clean("321234567890"));
console.log(clean("123-abc-7890"));
console.log(clean("123-@:!-7890"));
console.log(clean("(123) 456-7890"));
console.log(clean("(223) 156-7890"));
console.log(clean("1 (023) 456-7890"));
console.log(clean("22234567890"));
