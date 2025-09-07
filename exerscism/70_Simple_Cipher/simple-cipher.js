// Solución al ejercicio de Exercism: "Simple Cipher"
// Enunciado tomado de Exercism.org

const alfabeth = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z",
};

function randomKey(lengthKey) {
  let newKey = "";
  const min = 0;
  const max = Object.keys(alfabeth).length - 1;

  console.log(max);

  while (newKey.length < lengthKey) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    const letter = alfabeth[random];
    newKey += letter;
  }

  return newKey;
}

export class Cipher {
  constructor(key = randomKey(100)) {
    this._key = key;
  }

  encode() {
    throw new Error("Remove this line and implement the function");
  }

  decode() {
    throw new Error("Remove this line and implement the function");
  }

  get key() {
    return this._key;
  }
}

// Test cases
const cipher = new Cipher();
console.log(cipher.key);
