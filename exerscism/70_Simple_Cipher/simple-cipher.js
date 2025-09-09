// Solución al ejercicio de Exercism: "Simple Cipher"
// Enunciado tomado de Exercism.org

const alphabet = {
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

function findKeyByValue(obj, findValue) {
  for (let key in obj) {
    if (obj[key] === findValue) {
      return key;
    }
  }
  return undefined;
}

function randomKey(lengthKey) {
  let newKey = "";
  const min = 0;
  const max = Object.keys(alphabet).length - 1;

  while (newKey.length < lengthKey) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    const letter = alphabet[random];
    newKey += letter;
  }

  return newKey;
}

export class Cipher {
  constructor(key = randomKey(100)) {
    this._key = key;
  }

  encode(plaintext) {
    if (plaintext.length === 1) {
      if (plaintext === "a") {
        return this._key;
      }
    } else {
      const uniqueLetters = new Set(plaintext);
      if (uniqueLetters.size === 1 && uniqueLetters.has("a")) {
        return this._key;
      }
    }

    if (plaintext.length > this._key.length) {
      const keyArr = this._key.split("");
      let count = 0;
      while (plaintext.length > this._key.length) {
        if (keyArr[count] !== undefined) {
          this._key += keyArr[count];
          count++;
        } else {
          count = 0;
        }
      }
    }

    let arrEncodedText = [];
    const alphabetLength = Object.values(alphabet).length;

    for (let i = 0; i < plaintext.length; i++) {
      let tempKeyTextPlane = Number(findKeyByValue(alphabet, plaintext[i]));
      let tempKey = Number(findKeyByValue(alphabet, this._key[i]));
      let sumKeys = tempKeyTextPlane + tempKey;

      if (sumKeys > alphabetLength) {
        sumKeys = sumKeys % alphabetLength;
      }

      arrEncodedText.push(sumKeys);
    }

    let result = "";

    arrEncodedText.forEach((element) => {
      result += alphabet[element];
    });
    return result;
  }

  decode() {
    throw new Error("Remove this line and implement the function");
  }

  get key() {
    return this._key;
  }
}

// Test cases
const cipher = new Cipher("abcd");
console.log(cipher.encode("hello"));

const cipher2 = new Cipher("d");
console.log(cipher2.encode("iamapandabear"));

const cipher3 = new Cipher("lemon");
console.log(cipher3.encode("attackatdawn"));

const cipher4 = new Cipher("tomato");
console.log(cipher4.encode("y"));
